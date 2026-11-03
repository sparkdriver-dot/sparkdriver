import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { orders } from "../src/data/orders.js";
import {
  initialQuantities,
  countItems,
  calculateTotal,
  distanceMiles,
  nearbyCoordinates,
} from "../src/lib/utils.js";
import { createAuthClient } from "../src/auth.js";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
test("all nine orders and item counts recovered", () => {
  assert.equal(orders.length, 9);
  assert.deepEqual(
    orders.map((o) => countItems(o, initialQuantities(o))),
    [4, 2, 2, 4, 2, 5, 4, 1, 4],
  );
  assert.equal(new Set(orders.map((o) => o.id)).size, 9);
});
test("totals respect zero, partial and full quantities", () => {
  const paula = orders[0];
  assert.equal(calculateTotal(paula, initialQuantities(paula)), "$1,681.38");
  assert.equal(
    calculateTotal(paula, { "Nintendo Switch 2": 1, "AirPods Pro 3": 0 }),
    "$590.70",
  );
  assert.equal(
    calculateTotal(paula, { "Nintendo Switch 2": 0, "AirPods Pro 3": 0 }),
    "$0.00",
  );
  assert.equal(
    countItems(paula, { "Nintendo Switch 2": 0, "AirPods Pro 3": 0 }),
    0,
  );
});
test("deterministic nearby address coordinates stay within the requested radius", () => {
  const origin = { lat: 35.7479, lng: -95.3697 };
  for (const o of orders) {
    const destination = nearbyCoordinates(origin, 15, o.id);
    assert.ok(distanceMiles(origin, destination) <= 15.0001);
    assert.deepEqual(destination, nearbyCoordinates(origin, 15, o.id));
  }
});
test("all locally referenced product assets exist and are nonempty", async () => {
  const assets = await fs.readFile(
    path.join(root, "src/data/assets.js"),
    "utf8",
  );
  const urls = [...assets.matchAll(/"(\/assets\/[^"]+)"/g)].map((m) => m[1]);
  assert.ok(urls.length >= 15);
  for (const url of urls) {
    const stat = await fs.stat(path.join(root, "public", url));
    assert.ok(stat.size > 100, url);
  }
});

test('local authentication rejects wrong credentials, persists and signs out', async () => {
  const { pbkdf2Sync, createHash } = await import('node:crypto');
  const { verifyLocalCredentials } = await import('../src/auth.js');
  const salt='0102030405060708090a0b0c0d0e0f10';
  const record={id:'test-user',emailHash:createHash('sha256').update('test@example.com').digest('hex'),salt,iterations:1000,passwordHash:pbkdf2Sync('test-password',Buffer.from(salt,'hex'),1000,32,'sha256').toString('hex')};
  assert.equal((await verifyLocalCredentials({email:' TEST@EXAMPLE.COM ',password:'test-password'},[record])).id,'test-user');
  assert.equal(await verifyLocalCredentials({email:'test@example.com',password:'incorrect'},[record]),null);
  assert.equal(await verifyLocalCredentials({email:'unknown@example.com',password:'test-password'},[record]),null);
  const memory=new Map();
  globalThis.sessionStorage={getItem:key=>memory.get(key),setItem:(key,value)=>memory.set(key,value),removeItem:key=>memory.delete(key)};
  const client=createAuthClient(null,null,[record]);
  const events=[];client.auth.onAuthStateChange(event=>events.push(event));
  const failed=await client.auth.signInWithPassword({email:'test@example.com',password:'incorrect'});
  assert.ok(failed.error);assert.equal((await client.auth.getSession()).data.session,null);
  const success=await client.auth.signInWithPassword({email:'test@example.com',password:'test-password'});
  assert.equal(success.error,null);assert.equal(events[0],'SIGNED_IN');
  const saved=memory.get('spark-local-session-v2');assert.ok(!saved.includes('test-password'));assert.ok(!saved.includes('test@example.com'));
  const restored=createAuthClient(null,null,[record]);assert.equal((await restored.auth.getSession()).data.session.user.id,'test-user');
  await client.auth.signOut();assert.equal(events[1],'SIGNED_OUT');assert.equal((await client.auth.getSession()).data.session,null);
  memory.set('spark-local-session-v2',JSON.stringify({accountId:'test-user',expiresAt:1}));assert.equal((await createAuthClient(null,null,[record]).auth.getSession()).data.session,null);
  delete globalThis.sessionStorage;
});
test('four accounts contain only salted password verifiers and hashed identifiers', async()=>{
  const {accounts}=await import('../src/data/accounts.js');assert.equal(accounts.length,4);
  assert.equal(new Set(accounts.map(account=>account.salt)).size,4);
  for(const account of accounts){assert.match(account.emailHash,/^[a-f0-9]{64}$/);assert.match(account.passwordHash,/^[a-f0-9]{64}$/);assert.equal(account.iterations,310000);assert.equal(account.email,undefined);assert.equal(account.password,undefined);}
});

test('pickup address and custom order changes survive reload without changing other orders', async () => {
  const {readPickupAddress,savePickupAddress,readOrderState,saveOrderState}=await import('../src/lib/local-edits.js');
  const memory=new Map();globalThis.localStorage={getItem:key=>memory.get(key),setItem:(key,value)=>memory.set(key,value)};
  assert.equal(readPickupAddress('original address'),'original address');
  assert.throws(()=>savePickupAddress('   '));savePickupAddress('  New pickup address  ');
  assert.equal(readPickupAddress('original address'),'New pickup address');
  const custom={...orders[0],items:[...orders[0].items,{name:'New product',desc:'Test',price:'$3.00',max:500,emoji:'📦'}]};
  const quantities={...initialQuantities(custom),'Nintendo Switch 2':25};
  saveOrderState(custom,quantities);
  const restored=readOrderState(orders[0]);assert.equal(restored.order.items.length,3);assert.equal(restored.quantities['Nintendo Switch 2'],25);assert.equal(restored.quantities['New product'],500);
  assert.equal(countItems(restored.order,restored.quantities),527);assert.equal(readOrderState(orders[1]).order.items.length,2);
  delete globalThis.localStorage;
});
test('scan plan supports large quantities without allocating a step per unit', async () => {
  const {createScanPlan}=await import('../src/lib/local-edits.js');
  const plan=createScanPlan([{name:'First',max:2},{name:'Second',max:1}],{First:1000000,Second:3});
  assert.equal(plan.length,2000006);assert.deepEqual(plan.stepAt(0),{name:'First',pass:1});assert.deepEqual(plan.stepAt(1999999),{name:'First',pass:2});assert.deepEqual(plan.stepAt(2000000),{name:'Second',pass:1});assert.deepEqual(plan.stepAt(2000005),{name:'Second',pass:2});
  assert.equal(createScanPlan([],{}).stepAt(0),undefined);
});


test('one-hour session expires automatically without reload and rejects old sessions', async () => {
  const {createHash,pbkdf2Sync}=await import('node:crypto');
  const {SESSION_DURATION_MS}=await import('../src/auth.js');
  const salt='0102030405060708090a0b0c0d0e0f10';
  const record={id:'expiry-test',emailHash:createHash('sha256').update('test@example.com').digest('hex'),salt,iterations:1000,passwordHash:pbkdf2Sync('test-password',Buffer.from(salt,'hex'),1000,32,'sha256').toString('hex')};
  const memory=new Map();globalThis.sessionStorage={getItem:key=>memory.get(key),setItem:(key,value)=>memory.set(key,value),removeItem:key=>memory.delete(key)};
  let time=10000000;let timer;let delay;
  const runtime={now:()=>time,setTimeout:(callback,ms)=>{timer=callback;delay=ms;return 1},clearTimeout:()=>{timer=null}};
  const client=createAuthClient(null,null,[record],runtime);
  const events=[];client.auth.onAuthStateChange(event=>events.push(event));
  await client.auth.signInWithPassword({email:'test@example.com',password:'test-password'});
  const session=(await client.auth.getSession()).data.session;
  assert.equal(SESSION_DURATION_MS,3600000);assert.equal(session.expiresAt-session.issuedAt,3600000);assert.equal(delay,3600000);
  time+=3599999;assert.ok((await client.auth.getSession()).data.session);
  time+=1;timer();assert.equal(events.at(-1),'SIGNED_OUT');assert.equal((await client.auth.getSession()).data.session,null);assert.equal(memory.get('spark-local-session-v2'),undefined);
  memory.set('spark-local-session-v1',JSON.stringify({accountId:record.id,expiresAt:time+8*3600000}));assert.equal((await createAuthClient(null,null,[record],runtime).auth.getSession()).data.session,null);
  delete globalThis.sessionStorage;
});

test('published app includes an install manifest with scoped URLs and correctly sized icons', async () => {
  const manifest=JSON.parse(await fs.readFile(path.join(root,'public/manifest.webmanifest'),'utf8'));
  assert.equal(manifest.display,'standalone');assert.equal(manifest.prefer_related_applications,false);
  const url=new URL('https://example.github.io/repository/manifest.webmanifest');
  assert.equal(new URL(manifest.start_url,url).pathname,'/repository/');assert.equal(new URL(manifest.scope,url).pathname,'/repository/');
  for(const size of [192,512]) {
    const icon=manifest.icons.find(icon=>icon.sizes===`${size}x${size}`);assert.ok(icon);
    const bytes=await fs.readFile(path.join(root,'public',icon.src));assert.equal(bytes.readUInt32BE(16),size);assert.equal(bytes.readUInt32BE(20),size);
  }
  const generator=await fs.readFile(path.join(root,'scripts/standalone.mjs'),'utf8');assert.ok(generator.includes('rel="manifest"'));assert.ok(generator.includes('github-pages'));
});

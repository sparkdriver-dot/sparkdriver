import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
let vendor=await fs.readFile(path.join(root,'src/vendor.js'),'utf8');
const exports=vendor.match(/\nexport \{([\s\S]*?)\};\s*$/);
if(!exports) throw Error('Missing dependency exports');
const aliases=exports[1].split(',').map(part=>part.trim().split(/\s+as\s+/)).filter(parts=>parts.length===2&&parts[0]!==parts[1]).map(([original,alias])=>`const ${alias} = ${original};`).join('\n');
vendor=vendor.slice(0,exports.index)+'\n'+aliases;
const files=['data/accounts.js','config.js','data/assets.js','data/orders.js','lib/utils.js','lib/local-edits.js','auth.js','editors.js','camera-sharing.js','camera-turn.js','camera-live.js','app.js'];
let code=vendor+'\n';
for(const name of files){
 let content=await fs.readFile(path.join(root,'src',name),'utf8');
 content=content.replace(/^import\s[\s\S]*?;\s*/gm,'').replace(/\bexport\s+(?=(?:const|function|async\s+function)\b)/g,'');
 if(name==='app.js') content=content.replace('jsxRuntime.jsx(BrowserRouter, {','jsxRuntime.jsx(BrowserRouter, { basename: location.pathname,');
 code+='\n'+content;
}
const assets=await fs.readdir(path.join(root,'public/assets'));
for(const name of assets){
 const extension=path.extname(name).toLowerCase();
 const mime={'.png':'image/png','.jpeg':'image/jpeg','.jpg':'image/jpeg','.webp':'image/webp'}[extension];
 if(mime){const data=await fs.readFile(path.join(root,'public/assets',name));code=code.split('/assets/'+name).join(`data:${mime};base64,${data.toString('base64')}`);}
}
const css=await fs.readFile(path.join(root,'src/styles.css'),'utf8');
const html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Spark Driver</title><style>'+css+'</style></head><body><div id="root"></div><script type="module">'+code.replace(/<\/script/gi,'<\\/script')+'</script></body></html>';
await fs.writeFile(path.join(root,'ABRIR.html'),html);
await fs.writeFile(path.join(root,'dist/ABRIR.html'),html);
await fs.mkdir(path.join(root,'github-pages'),{recursive:true});
const installMetadata = '<meta name="theme-color" content="#0067d6"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Spark Driver"><link rel="manifest" href="./manifest.webmanifest"><link rel="icon" type="image/png" href="./icon-192.png"><link rel="apple-touch-icon" href="./icon-192.png">';
const hostedHtml = html.replace('</head>', installMetadata + '</head>');
await fs.writeFile(path.join(root,'github-pages/index.html'),hostedHtml);
for (const file of ['manifest.webmanifest', 'icon-192.png', 'icon-512.png']) await fs.copyFile(path.join(root,'public',file),path.join(root,'github-pages',file));
await fs.writeFile(path.join(root,'github-pages/.nojekyll'),'');
console.log('ABRIR.html ready: self-contained interface, assets and local authentication.');

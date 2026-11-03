import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
await fs.mkdir(dist, { recursive: true });
await fs.copyFile(path.join(root, "index.html"), path.join(dist, "index.html"));
await fs.cp(path.join(root, "src"), path.join(dist, "src"), {
  recursive: true,
});
await fs.cp(path.join(root, "public"), dist, { recursive: true });
console.log(
  "Static build ready in dist/. Deploy it to any static web host with SPA fallback.",
);

await import('./standalone.mjs');

import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const project = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const isDist = process.argv.includes("--dist");
const root = isDist ? path.join(project, "dist") : project;
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json",
  ".woff2": "font/woff2",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      if (pathname.includes("\0")) {
        res.writeHead(400).end();
        return;
      }
      const assetRoot =
        !isDist &&
        (pathname.startsWith("/assets/") ||
          pathname === "/manifest.json" ||
          pathname === "/app-logo.png")
          ? path.join(project, "public")
          : root;
      let target = path.resolve(assetRoot, "." + pathname);
      if (!target.startsWith(assetRoot + path.sep) && target !== assetRoot) {
        res.writeHead(403).end();
        return;
      }
      if (pathname === "/") target = path.join(root, "index.html");
      let data;
      try {
        data = await fs.readFile(target);
      } catch (error) {
        if (!path.extname(pathname)) {
          target = path.join(root, "index.html");
          data = await fs.readFile(target);
        } else {
          res.writeHead(404).end("Not found");
          return;
        }
      }
      res.writeHead(200, {
        "Content-Type":
          mime[path.extname(target)] || "application/octet-stream",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(data);
    } catch (error) {
      res.writeHead(500).end("Server error");
      console.error(error.message);
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Spark Driver local: http://localhost:${port}`),
  );

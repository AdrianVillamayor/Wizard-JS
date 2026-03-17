import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    root: import.meta.dirname,
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "../src"),
            "@core": path.resolve(import.meta.dirname, "../src/core"),
            "@styles": path.resolve(import.meta.dirname, "../src/styles"),
            "@adrii_/wizard-js": path.resolve(import.meta.dirname, "../src/index.js")
        }
    },
    server: {
        open: "/index.html"
    },
    build: {
        emptyOutDir: true,
        outDir: path.resolve(import.meta.dirname, "dist")
    }
});

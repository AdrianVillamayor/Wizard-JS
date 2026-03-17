import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    root: fileURLToPath(new URL("./", import.meta.url)),
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("../src", import.meta.url)),
            "@core": fileURLToPath(new URL("../src/core", import.meta.url)),
            "@styles": fileURLToPath(new URL("../src/styles", import.meta.url)),
            "@adrii_/wizard-js": fileURLToPath(new URL("../src/index.ts", import.meta.url))
        }
    },
    server: {
        open: "/index.html"
    },
    build: {
        emptyOutDir: true,
        outDir: fileURLToPath(new URL("./dist", import.meta.url))
    }
});

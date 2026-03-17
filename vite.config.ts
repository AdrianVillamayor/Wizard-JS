import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@core": fileURLToPath(new URL("./src/core", import.meta.url)),
            "@styles": fileURLToPath(new URL("./src/styles", import.meta.url))
        }
    },
    build: {
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
            name: "Wizard",
            formats: ["umd", "es"],
            fileName: (format) => format === "es" ? "index.esm.js" : "index.js",
            cssFileName: "main.min"
        },
        target: "es2018"
    }
});

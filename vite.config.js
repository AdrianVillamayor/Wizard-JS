import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@core": path.resolve(__dirname, "src/core"),
            "@styles": path.resolve(__dirname, "src/styles")
        }
    },
    build: {
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "Wizard",
            formats: ["umd", "es"],
            fileName: (format) => format === "es" ? "index.esm.js" : "index.js",
            cssFileName: "main.min"
        },
        target: "es2018"
    }
});
    
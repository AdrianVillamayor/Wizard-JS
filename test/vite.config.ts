import { defineConfig } from "vite";

export default defineConfig({
    server: {
        open: "/index.html",
        fs: {
            allow: [".."]
        }
    }
});

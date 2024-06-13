import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://server-side-3mvw5c1kk-siddarth2810s-projects.vercel.app/",
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: 'dist', // Ensure this matches the vercel.json config
    }
});


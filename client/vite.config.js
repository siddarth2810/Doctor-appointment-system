import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://doctor-appointment-system-beta-one.vercel.app/",
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: 'dist', // Ensure this matches the vercel.json config
    }
});


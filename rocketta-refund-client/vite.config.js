import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"], // Ensures support for Safari
    }),
  ],
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: "https://rocketta-refund.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "es2015", // Ensures better Safari compatibility
    polyfillDynamicImport: true,
  },
});

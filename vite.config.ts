import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true, // Listen on all addresses
    hmr: {
      overlay: true,
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  logLevel: "info",
  clearScreen: false,
  assetsInclude: ["**/*.ttf"],
  publicDir: "public",
});

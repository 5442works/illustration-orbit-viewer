import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/illustration-orbit-viewer/",

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },

  root: path.resolve(__dirname, "client"),

  build: {
    // GitHub Actions の探している ./dist/public に合わせます
    outDir: path.resolve(__dirname, "../dist/public"),
    emptyOutDir: true,
  },
});

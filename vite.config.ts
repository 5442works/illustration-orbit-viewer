import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pages用のベースパス設定
  base: "/illustration-orbit-viewer/",
  
  // index.html が入っている client フォルダをルートに指定
  root: path.resolve(__dirname, "client"),
  
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  build: {
    // 出力先をプロジェクト直下の dist/public に設定
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});

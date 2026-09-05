import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pagesの公開ディレクトリパス
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

  // client/index.html をルートとして扱う設定
  root: path.resolve(__dirname, "client"),

  build: {
    // root (client) から見た出力先を指定（プロジェクト直下の dist に出力）
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pagesの公開ディレクトリパス
  base: "/illustration-orbit-viewer/",

  // client フォルダをプロジェクトのルート（起点）に設定
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
    // root (client) から見て 1つ上の階層の dist/public に出力
    outDir: "../dist/public",
    emptyOutDir: true,
  },
});

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

  build: {
    rollupOptions: {
      // プロジェクト直下から見た index.html の位置を直接指定
      input: path.resolve(__dirname, "client/index.html"),
    },
    // 出力先
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});

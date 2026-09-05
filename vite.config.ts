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
      // client/index.html をエントリーポイントに指定
      input: path.resolve(__dirname, "client/index.html"),
    },
    // プロジェクトルート直下の dist/public に出力
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});

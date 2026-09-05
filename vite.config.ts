import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pages用のベースパス設定
  base: "/illustration-orbit-viewer/",
  
  // HTMLファイルやソースコードが入っている client フォルダをプロジェクトルートに設定
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
    // root を指定しているため、入力（entry）は client/index.html を指定
    rollupOptions: {
      input: path.resolve(__dirname, "client", "index.html"),
    },
    // 出力先をプロジェクトルート直下の dist/public に設定
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import path from "path";

export default defineConfig({
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      layout: path.resolve(__dirname, "src/layout"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      hooks: path.resolve(__dirname, "src/hooks"),
      utils: path.resolve(__dirname, "src/utils"),
      routes: path.resolve(__dirname, "src/routes")
    }
  },
  plugins: [
    react(),
    Unocss({
      presets: [presetUno()]
    })
  ]
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [
    react(),
    Unocss({
      presets: [presetUno()]
    })
  ]
});

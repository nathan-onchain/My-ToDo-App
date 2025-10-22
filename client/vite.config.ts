import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // npm install @vitejs/plugin-react-swc --save-dev

import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@mycomponents": path.resolve(__dirname, "src/mycomponents"),
    },
  },
});

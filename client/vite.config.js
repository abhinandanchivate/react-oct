import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy setup
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9500",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

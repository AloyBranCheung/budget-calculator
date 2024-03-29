import { defineConfig } from "vite";
// plugins
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all")],
  server: {
    host: true,
    port: 3000,
    hmr: {
      clientPort: 3000,
    },
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
});

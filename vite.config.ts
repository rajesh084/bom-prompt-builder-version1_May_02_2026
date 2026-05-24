import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Allows temporary mobile preview URLs from localtunnel during development.
    allowedHosts: [".loca.lt"],
  },
});

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Allows temporary mobile preview URLs during development.
    allowedHosts: [".loca.lt", ".trycloudflare.com"],
  },
  preview: {
    // Vite preview has its own host allowlist.
    allowedHosts: [".loca.lt", ".trycloudflare.com"],
  },
});

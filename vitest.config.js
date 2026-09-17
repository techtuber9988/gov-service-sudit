import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["test/client/setup.js"],
    include: ["test/client/**/*.test.jsx"],
  },
});

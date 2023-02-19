import { defineConfig } from "vitest/config";

// https://vitest.dev/guide/#configuring-vitest
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    watch: false,
    setupFiles: ["./src/__tests__/setupVitest.ts"],
  },
});

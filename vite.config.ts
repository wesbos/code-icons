import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      output: {
        format: "es",
      },
      external: ["path", "fs", "fs/promises", "url"],
    },
    target: "esnext",
    minify: false,
  },
  plugins: [dts()],
});

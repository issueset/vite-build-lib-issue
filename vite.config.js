import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    outDir: "./dist_vite",
    lib: {
      entry: "./src/index.js",
      formats: ["cjs"],
    },
    rollupOptions: {
      external: [
        "electron",
        /* 'fs/promises' */
      ],
      plugins: [nodeResolve(), commonjs()],
    },
  },
});

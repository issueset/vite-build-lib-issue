import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.js",
  output: [
    {
      dir: "dist_rollup",
      format: "cjs",
    },
  ],
  external: ['electron'],
  plugins: [nodeResolve(), commonjs()],
});

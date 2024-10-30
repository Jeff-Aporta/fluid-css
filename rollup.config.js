import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.mjs",
  output: {
    file: "public/index.js",
    format: "iife",
    name: "fluidCSS",
  },
  plugins: [resolve({ extensions: [".mjs", ".js"] }), terser()],
};

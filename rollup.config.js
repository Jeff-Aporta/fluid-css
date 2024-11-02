import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./app/index.mjs",
  output: {
    file: "./public/js/index.all.min.js",
    format: "iife",
    name: "fluidCSS",
  },
  plugins: [resolve({ extensions: [".mjs", ".js"] }), terser()],
};

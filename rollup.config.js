import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { eslint } from "rollup-plugin-eslint";
import friendlyFormatter from "eslint-friendly-formatter";
import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

const sameConfig = {
  watch: {
    include: "src/**",
  },
  plugins: [
    eslint({
      include: ["src/**"],
      exclude: ["node_modules/**"],
      formatter: friendlyFormatter,
      throwOnError: true,
      fix: true,
    }),
    babel({
      exclude: ["node_modules/**"],
      runtimeHelpers: true,
    }),
    resolve({
      mainFields: ["jsnext", "module", "main"],
    }),
    json(),
    commonjs(),
    uglify(),
  ],
};

export default [
  {
    input: ["src/index.js"],
    output: [
      {
        dir: "lib",
        format: "cjs",
        entryFileNames: "[name].js",
      },
      {
        dir: "lib",
        format: "es",
        entryFileNames: "[name].esm.js",
      },
      {
        dir: "lib",
        format: "umd",
        entryFileNames: "[name].umd.js",
      },
      {
        dir: "lib",
        format: "amd",
        entryFileNames: "[name].amd.js",
      },
      {
        dir: "lib",
        format: "iife",
        entryFileNames: "[name].iife.js",
      },
    ],
    ...sameConfig,
  },
];

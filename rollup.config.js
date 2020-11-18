import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { eslint } from 'rollup-plugin-eslint';
import friendlyFormatter from 'eslint-friendly-formatter';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  input: ['src/index.js'],
  output: {
    dir: 'lib',
    format: 'cjs',
    entryFileNames: '[name].js',
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    eslint({
      include: ['src/**'],
      exclude: ['node_modules/**'],
      formatter: friendlyFormatter,
      throwOnError: true,
      fix: true,
    }),
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true
    }),
    resolve({
      mainFields: ['jsnext', 'module', 'main'],
    }),
    json(),
    commonjs(),
    uglify()
  ],
};

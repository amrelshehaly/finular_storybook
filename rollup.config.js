import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';


export default {
  input: 'stories/index.ts',
  output: {
    file: 'dist/storybook.min.js',
    format: 'iife',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    css({ output: 'bundle.css' }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    terser()
  ],
};
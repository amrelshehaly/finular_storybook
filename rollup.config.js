import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import terser from '@rollup/plugin-terser';


export default {
  input: 'stories/index.js',
  output: {
    file: 'dist/storybook.min.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    css({ output: 'bundle.css' }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ],
  external: [
    'react',
    'react-dom',
    // other external dependencies
  ]
};
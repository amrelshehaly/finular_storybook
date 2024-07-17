import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';

export default {
  input: 'stories/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    css({ output: 'bundle.css' }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'react-dom',
    // other external dependencies
  ]
};
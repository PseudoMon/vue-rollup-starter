import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'



const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app'
  },
  plugins: [
    postcss({ extract: true }),
    vue({ css: false }),
    replace({
      'process.env.NODE_ENV': production ? JSON.stringify('production') : JSON.stringify('development')
    }),
    resolve(),
    esbuild({
      minify: production,
      target: 'es2015'
    }),
    commonjs(),
  ]
}
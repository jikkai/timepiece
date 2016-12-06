export default {
  entry: './src/plugins/vue.js',
  plugins: [
    require('rollup-plugin-uglify')(),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  moduleName: "timepiece",
  dest: './dist/timepiece.vue.js'
}
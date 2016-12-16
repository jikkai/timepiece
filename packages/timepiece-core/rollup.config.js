export default {
  entry: './src/index.js',
  plugins: [
    require('rollup-plugin-uglify')(),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  moduleName: "timepiece",
  dest: './dist/timepiece.js'
}
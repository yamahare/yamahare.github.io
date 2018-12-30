const path = require('path');
const env = process.env.NODE_ENV
const entry = require('webpack-glob-entry');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: env || 'development',
  entry: entry("./src/js/*.js"),
  output: {
    path: path.resolve(__dirname,  './public/js/'),
    filename: '[name].js',
  },
  // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      // pug
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

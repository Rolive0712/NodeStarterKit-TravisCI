// While import is indeed part of ES6,
// it is unfortunately not natively supported in NodeJS by default, and has only very recently landed support in browsers.
// to use ES6 imports in this kit, we have to use "babel-node" to transpile as mentioned in "npm start" to run application.

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// const path 	= require('path');
// const HtmlWebpackPlugin	= require('html-webpack-plugin');

export default {
// module.exports = {
  debug: true,
  devtool: 'inline-source-map', // enable source map for debugging minified code mapped to source
  noInfo: false, // false to turn off list of bundled files to remove noise
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [ // tell webpack, that we want to manage *.js, *.css
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}

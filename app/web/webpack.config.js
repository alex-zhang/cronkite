'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: [
      `webpack-dev-server/client?http://127.0.0.1:3001`,
      `webpack/hot/only-dev-server`,
      './index.jsx'
    ]
  },

  output: {
    path: './dist',
    filename: 'app_bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new HtmlWebpackPlugin()
  ]
};

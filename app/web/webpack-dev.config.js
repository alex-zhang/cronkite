'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const precss       = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {

  context: __dirname + '/src',

  devServer: {
    contentBase: '.',
    hot: true, // Live-reload
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },

  entry: [
    //`webpack-dev-server/client?http://127.0.0.1:3000`,
    //`webpack/hot/only-dev-server`,
    'babel-polyfill',
    './index.jsx'
  ],

  output: {
    path: './dist',
    filename: 'app-[hash]-bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer!stylus'
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devtool: 'eval',
  resolve:{
    extensions:['', '.js','.json', '.jsx', '.styl']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: 'index.ejs'
    })
  ]
};

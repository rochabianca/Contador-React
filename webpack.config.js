const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './ex/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  },
  devServer: {
    port: 8000,
    contentBase: './public',
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread'] 
      }
    },
    {
      test: /.css?$/,
      loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader"})
    }]
  }
}
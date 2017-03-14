const webpack = require('webpack');
const path = require('path');
const commonLoaders = [
    {
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, '..', 'app'),
      exclude: path.join(__dirname, '..', 'node_modules'),
    },
    { test: /\.json$/, loader: 'json' },
  ];

module.exports = {
  devtool: 'eval',
  name: 'client',
  context: path.join(__dirname, '..', 'app'),
  entry: './client.js',
  output: {
    path: path.join(__dirname, '..', 'dist', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ]),
  },
};

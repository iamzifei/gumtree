const path = require('path');
const nodeExternals = require('webpack-node-externals');
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
  name: 'SSR',
  context: path.join(__dirname, '..', 'app'),
  entry: './SSR.js',
  output: {
    path: path.join(__dirname, '..', 'dist', 'assets'),
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/',
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]),
  },
};

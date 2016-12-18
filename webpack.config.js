const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/src');

const config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'eslint-loader',
      },
    ],
  },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
};

module.exports = config;

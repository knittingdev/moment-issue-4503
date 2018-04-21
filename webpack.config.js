const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
        /fr/
    ), // Only french
  ]
};


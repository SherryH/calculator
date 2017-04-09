const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/compiled/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=0&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },

};

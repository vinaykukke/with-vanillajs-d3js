const babelConf = require('./babelrc.json');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'client', 'index.ts'),
  output: {
    path: path.resolve('dist'),
    filename: 'client.bundle.js'
  },
  mode: 'development', // Needed from webpack 4
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf
          }
        ],
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConf
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '..', 'client', 'components'),
    },
    extensions: ['.js', '.ts', '.json', '*'],
  }
}
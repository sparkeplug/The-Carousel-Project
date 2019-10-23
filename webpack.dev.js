/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/demo.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'theCarouselProject'
  },
  resolve: {
    alias: {
      theCarouselProject: path.resolve(__dirname, 'dist/theCarouselProject.min')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/demo.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

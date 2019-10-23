/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'theCarouselProject.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'theCarouselProject',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      theCarouselProject: path.resolve(__dirname, 'dist/theCarouselProject.min')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theCarouselProject.min.css'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
};

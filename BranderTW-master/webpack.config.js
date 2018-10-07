const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
	entry: {
		main: resolve(__dirname, 'js/main')
	},
	output: {
		filename: '[name].js',
      path: resolve(__dirname, 'dist'),
	},
	module: {
      rules: [
        {
          test: /\.scss$/,
          include: resolve(__dirname, 'stylesheet'),
          use: [
          	{loader: 'style-loader'},
          	{loader: 'css-loader'},
          	{loader: 'postcss-loader'},
          	{loader: 'sass-loader'}
          ],
        },
      ],
    },
    plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      inject: 'body',
      template: 'index.html',
      filename: 'index.html',
    }),
  ],

  devServer: {
    port: 8000,
    open: true,
  },
}
const HtmlWebPackPlugin = require('html-webpack-plugin');
//const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
	output: {
		path: __dirname + '/build',
	},
	devServer: {
		port: 3000,
	},
};

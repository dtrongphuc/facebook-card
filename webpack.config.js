const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		path: __dirname + '/build',
	},
	devServer: {
		port: 3000,
	},
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
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|svg|jpeg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
	resolve: {
		roots: [__dirname, path.resolve(__dirname, 'src')],
		alias: {
			Components: path.resolve(__dirname, 'src/components/'),
			Scss: path.resolve(__dirname, 'src/assets/scss/'),
		},
	},
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
var path = require('path');

module.exports = {
	watch: false,
	target: 'electron-renderer',
	mode: 'production', // development
	//devtool: 'inline-source-map', //remove for prod
	entry: {
		app: './src/components/app.tsx',	
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				type: 'asset/resource'
			 },
			 {
				test: /\.(png|jpe?g|gif)$/i,
				type: 'asset/resource'
			 }
		]
	},
	plugins: [
		new NodePolyfillPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: './css', to: 'css' },
				{ from: './lib', to: 'lib' },
				{ from: './images', to: 'images' }
			]
		})
	]
};
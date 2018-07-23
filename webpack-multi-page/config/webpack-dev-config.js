const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const webpackBaseConfig = require('./webpack-base-config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

let htmlArr = fs.readdirSync(path.resolve(__dirname,'../src/pages/html'));
let entries = {};
let htmlPlugins = [];

for(let item of htmlArr) {
	let name = item.split('.html')[0];
	htmlPlugins.push(new HTMLWebpackPlugin({
		filename: item,
		template: path.resolve(__dirname,`../src/pages/html/${item}`),
		chunks: ['common',name],
	}));
	entries[name] = path.resolve(__dirname,`../src/pages/js/${name}.js`);
};

module.exports = webpackMerge(webpackBaseConfig,{
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry: entries,
	devServer: {
		contentBase: path.join(__dirname,'../dist'),
		host:'192.168.1.6',
		port: 9000,
		historyApiFallback: true,
		progress: true,
		hot:true,
		open:true,
		inline: true,
	},
	plugins: [
		...htmlPlugins,
		new webpack.HotModuleReplacementPlugin()
	],
});
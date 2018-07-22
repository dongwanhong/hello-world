// 产品模式未经测试
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const webpackBaseConfig = require('./webpack-base-config');
const webpackMerge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
// uglifyjs-webpack-plugin
// mini-css-extract-plugin

let htmlArr = fs.readdirSync(path.resolve(__dirname,'../src/html'));
let entries = {};
let htmlPlugins = [];

for(let item of htmlArr) {
	let name = item.split('.html')[0];
	htmlPlugins.push(new HTMLWebpackPlugin({
		filename: item,
		template: path.resolve(__dirname,`../src/html/${item}`),
		chunks: ['common',name],
		inject: true,
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true
		},
	}));
	entries[name] = path.resolve(__dirname,`../src/js/${name}.js`);
};

module.exports = webpackMerge(webpackBaseConfig,{
	mode: 'production',
	entry: entries,
	plugins: [
		...htmlPlugins,
		// 打包之前使用这个插件尝试清除dist目录下的文件
	    new cleanWebpackPlugin(['dist/*'], {
	        root: path.resolve(__dirname, '../')
	    }),
	],
})
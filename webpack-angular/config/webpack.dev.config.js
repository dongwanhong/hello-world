const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'development',
    output: {
        filename: 'market/js/[name].[hash].js',
        chunkFilename: 'market/js/[name].[hash].js'
    },
    module: {
        //
    },
    devServer: {
        contentBase: path.join(__dirname, '../market'),
        port:8080,
        // host:'0.0.0.0'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        //
    ]
});
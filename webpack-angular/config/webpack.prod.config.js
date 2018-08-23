const webpack = require('webpack');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'production',
    output: {
        filename: 'market/js/[name].[hash].js',
        chunkFilename: 'market/js/[name].[hash].js'
    },
    module: {
        //
    },
    plugins: [
        new cleanWebpackPlugin(['market/*'], {
            root: path.resolve(__dirname, '../')
        })
    ]
});
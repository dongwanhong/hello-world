const path = require('path');
// 引入公共配置
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');
// 用于分离 CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 删除冗余 CSS
const glob = require('glob');
const PurifyCssWebpack = require('purifycss-webpack');

module.exports = webpackMerge(webpackBaseConfig, {
  // 指定模式
  mode: 'production',
  // 加载器
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'postcss-loader', // Automatically add browser prefix
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    }]
  },
  // 插件配置
  plugins: [
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, '../*.html'))
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      // chunkFilename: "[id].css"
    })
  ]
});
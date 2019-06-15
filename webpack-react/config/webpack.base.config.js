const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口配置
  entry: {
    main: path.join(__dirname, '../src/index.js'),
  },
  // 输出配置
  output: {
    filename: 'js/[name].js', // 输出文件的文件名
    path: path.join(__dirname, '../dist'), // 输出文件所在目录
  },
  // 加载器
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          minimize: true
        }
      }]
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'postcss-loader', // Automatically add browser prefix
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader',
        }, {
          loader: 'eslint-loader'
        }]
    }, {
      test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf|ico)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,  // 指定上面所说的指定大小的标准，超过之后将会交给 file-loader 处理
          /*
           * 配置 file-loader 的可选项
           * [name]表示图片文件的文件名 
           * [ext]表示图片文件的扩展名 
           * [hash]表示图片文件的哈希值
           */
          name: 'images/[name].[ext]'
        }
      }]
    }]
  },
  // 插件管理
  plugins: [
    //创建 .html 并自动引入打包后的文件
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // 参照最初创建的 .html 来生成 .html
      inject: true,
      // 引入根路径下的 favicon.ico
      favicon: path.resolve('favicon.ico')
    })
  ]
};
/**
 * 修改 webppack 配置文件后需重启才能生效
 * 可添加的功能？：
 *  1、消除冗余 CSS
 *  2、压缩打包后的 JS
 */
const webpack = require('webpack');
// node.js 中的基本包，用于处理路径
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 用于分离 CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 消除冗余 CSS
// yarn add  purify-css purifycss-webpack glob
// const glob = require('glob');
// const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    // path.jion() 将两个参数代表的路径相加组合起来，__dirname代表当前文件所在目录
    entry: { // 入口文件
        main: path.join(__dirname, '../src/main.js'),
        // vendors: [
        //     'font-awesome-loader'
        // ]
    },
    output: { // 输出文件
        // filename: 'bundle.js', // 输出文件的文件名
        path: path.join(__dirname, '../'), // 输出文件所在目录
        // publicPath: ''
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.pug$/,
                use: [{
                    loader: 'pug-plain-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 为 css 创建 style 标签并置入其中插入页面
                    // 'style-loader',
                    // 处理 css
                    'css-loader',
                    // 浏览器兼容问题
                    'postcss-loader',
                ]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                    // loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        // post css plugins, can be exported to postcss.config.js
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    // compiles SASS to CSS
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.less/,
                // loader 由下往上依次开始处理
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    // 配置参数
                    options: {
                        limit: 1024, // 比较标准，小于标准的图片转换为 base64 代码
                        name: 'build/images/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        // Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
        new VueLoaderPlugin(),
        // bootstrap
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        }),
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        new MiniCssExtractPlugin({
            filename: "build/css/[name].css",
            chunkFilename: "build/css/[id].chunk.css"
        })
        // 消除冗余 CSS
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, '../*.html')),
        // })
    ]
}

const path = require('path');
// 引入公共配置
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');
// 加载本地数据
const testData = require('../src/server/manage/controller/test.json');


module.exports = webpackMerge(webpackBaseConfig, {
  // 指定模式
  mode: 'development',
  // devtool由 webpack 直接提供，将打包后的文件中的错误映射到最初对应的文件中，便于调试
  devtool: 'cheap-module-eval-source-map',
  // 对 webpack-dev-server 进行配置
  devServer: {
    //本地服务器所加载的页面所在的目录
    contentBase: path.join(__dirname, "../dist"),
    /* 服务器的主机号，默认是 localhost
     * 将该地址设为电脑的 ip 地址，局域网内的移动设备通过访问该地址下的30端口即可访问 web 应用
     */
    host: 'localhost',
    // 端口
    port: 3000,
    /* 设置编译后文件的路径，导致最后的文件文件地址为：http://localhost:3000/dist/main.js
     *
     * publicPath: 'http://localhost:3000/',
     */
    /* 应对返回404页面时定向到特定页面
     *
     * historyApiFallback: {
     *   rewrites: [{
     *     from: /./,
     *     to: '/404.html'
     *   }]
     * },
     */
    // 热模块替换机制
    // hot: true,
    /* 默认为 true, 意思是，在打包时会注入一段代码到最后的 js 文件中，用来监视页面的改动而自动刷新页面
     * 当为 false 时，网页自动刷新的模式是 iframe，也就是将模板页放在一个 frame中
     *
     * inline: true,
     */
    // 为 true 时，dev server 第一次会自动打开浏览器
    open: true,
    /* 对所有的服务器资源采用 gzip 压缩 
     * 对 JS，CSS 资源的压缩率很高，可以极大得提高文件传输的速率
     * 但是需要服务端要对文件进行压缩，客户端进行解压，增加了两边的负载
     * 
     * compress: true
     */
    before: function (app, server) {
      app.get('/local/data', function (req, res) {
        res.json(testData);
      });
    },
    disableHostCheck: true
  }
});
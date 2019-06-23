const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost',
    port: 9000,
    // 确定应该从哪里提供 bundle，并且此选项优先
    publicPath: 'http://localhost:9000/',
    // 服务器从哪里提供内容（静态文件）
    contentBase: path.resolve(__dirname, '../public'),
    // 将处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
    inline: true,
    // 以指定的浏览器自动打开，或设置为真以默认浏览器打开
    open: 'Google Chrome',
    // Specify a page to navigate to when opening the browser.
    openPage: './',
    // The filename that is considered the index file.
    index: 'index.htm',
    // 启用 webpack 的模块热替换
    hot: true,
    // 启用热模块替换，而不将页面刷新作为生成失败时的回退。
    hotOnly: true,
    // 任意的 404 响应都可能需要被替代为 index.html，可以参阅 connect-history-api-fallback 进一步配置
    historyApiFallback: true,
    // 参数 app 是由 express 创建的，可用于拦截部分请求返回特定内容
    before(app) {},
    // 在处理静态资源之后，可以用于打印日志
    after(app) {},
    // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印
    quiet: false,
    // Display only errors to reduce the amount of output
    stats: 'errors-only'
    // 前往 https://webpack.js.org/configuration/dev-server
    // 了解更多配置: https, headers, proxy, public, lazy, filename...
  }
}

module.exports = merge(common, devConfig)

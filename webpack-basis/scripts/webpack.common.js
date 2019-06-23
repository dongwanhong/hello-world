const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const devMode = process.env.NODE_ENV !== 'production'
const happyThreadPool = HappyPack.ThreadPool({ size: 3 })

const rules = [
  {
    test: /\.(le|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: devMode
        }
      },
      {
        loader: 'happypack/loader?id=styles'
      }
    ]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'happypack/loader?id=js'
      }
    ]
  },
  {
    test: require.resolve('jquery'),
    use: [
      {
        loader: 'expose-loader',
        options: '$'
      },
      {
        loader: 'expose-loader',
        options: 'jQuery'
      }
    ]
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'font/[name].[ext]',
          fallback: 'file-loader'
        }
      }
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name].[ext]',
          fallback: 'file-loader'
        }
      }
    ]
  }
]

const htmlWebpackPluginConf = {
  template: './app/index.html', // 指定模版
  filename: 'index.html', // 输出文件名
  favicon: './app/images/favicon.ico',
  minify: devMode
    ? null
    : {
        removeComments: true, // 移除注释
        removeRedundantAttributes: true, // 移除冗余属性
        collapseWhitespace: true // 移除空白
      }
}

const miniCssExtractPluginCfg = {
  filename: 'styles/[name].[contenthash:8].css'
}

const providePluginCfg = {
  _clone: 'exports-loader?clone!lodash/clone'
}

const ignorePluginCfg = {
  resourceRegExp: /^\.\/locale$/,
  contextRegExp: /moment$/
}

const happyPackJSCfg = {
  id: 'js',
  threadPool: happyThreadPool,
  loaders: ['babel-loader']
}

const happyPackStylesCfg = {
  id: 'styles',
  threadPool: happyThreadPool,
  loaders: [
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader'
    },
    {
      loader: 'less-loader'
    }
  ]
}

const baseConfig = {
  context: path.resolve(__dirname, '../'),
  entry: './app/index.js', // 入口文件，默认 main 作为名称
  output: {
    path: path.resolve(__dirname, '../dist'), // 指定输出文件所在目录
    filename: devMode ? 'javascript/[name].js' : 'javascript/[name].[contenthash:8].js' // 输出文件名，其中 name 为变量，值为入口文件名
  },
  module: {
    rules: rules
    // noParse: /jquery/,
  },
  resolve: {
    extensions: ['.js', '.json', '.less', '.css', '.mjs'],
    alias: {
      '@style': path.resolve(__dirname, '../app/styles/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginConf),
    new MiniCssExtractPlugin(miniCssExtractPluginCfg),
    new webpack.ProvidePlugin(providePluginCfg),
    new webpack.IgnorePlugin(ignorePluginCfg),
    new HappyPack(happyPackStylesCfg),
    new HappyPack(happyPackJSCfg)
  ]
}

module.exports = baseConfig

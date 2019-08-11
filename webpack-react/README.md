<h2>wepack-react 基础开发环境</h2>

项目构建了 `webpack-react` 的基础的开发环境。

你可以参考或者直接 `Fork` 此项目快速进行 `React` 应用的开发，而不必花更多的时间去搭建开发环境。

<code>node v10.14.2</code> &nbsp; <code>yarn v1.12.3</code> &nbsp; <code>OS Ubuntu 18.04</code>

#### 使用到的技术栈：

 - [node](https://nodejs.org/en/)
 - [webpack](https://webpack.js.org/)
 - [yarn](https://yarnpkg.com/en/)
 - [axios](https://github.com/axios/axios)
 - [react](https://reactjs.org/)
 - [redux](https://redux.js.org/)
 - [react-route](https://reacttraining.com/react-router/)
 - [react-intl](https://github.com/yahoo/react-intl)
 - [babel](https://babeljs.io/)
 - [eslint](https://eslint.org/)

#### 目录结构

```
├── config
│   ├── webpack.base.config.js        // 公共配置文件
│   ├── webpack.dev.config.js         // 开发模式配置文件
│   └── webpack.prod.config.js        // 生产模式配置文件
├── dist                              // 打包后文件所在目录
├── favicon.ico
├── index.html
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── client
│   │   ├── api                     // API 文件目录
│   │   │   └── data.js
│   │   ├── i18n                    // 国际化文件目录
│   │   │   ├── index.js
│   │   │   └── locales
│   │   │       ├── en-US.js
│   │   │       └── zh-CN.js
│   │   ├── static                  // 静态文件目录
│   │   │   └── images
│   │   │       └── logo.png
│   │   ├── store
│   │   │   ├── index.js
│   │   │   └── reducers.js
│   │   ├── styles                  // 样式文件目录
│   │   │   ├── app.less
│   │   │   ├── common.less
│   │   │   ├── reset.less
│   │   │   └── variable.less
│   │   └── views                   // 页面文件目录
│   │       ├── app.js
│   │       │
│   │       ├── home
│   │       │   └── index.js
│   │       └── product
│   │           └── index.js
│   ├── index.js                     // 项目入口文件
│   └── server                       // 假数据文件目录
│       └── manage
│           └── controller
│               └── test.json
└── yarn.lock
```

### `yarn run dev`

以开发模式运行你的项目，将会在系统默认的浏览器中自动打开 [http://localhost:3000](http://localhost:3000) 页面。

每当你修改你项目中的文件保存后都会自动反映在页面中，而且一些语法错误也会在终端或控制台上给出提示。

### `yarn run build`

将用于生产模式的项目打包到“dist”文件夹中，它在生产模式下正确地捆绑响应，并优化构建以获得最佳性能。

生成后的文件被压缩，文件名包括哈希，现在，您的应用程序已准备好进行部署。

#### [查看我的博客](https://dongwanhong.github.io/#/)
#### [给我发送邮件](http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zqqhoKm5pq2moI6oobajr6ei4K2how)
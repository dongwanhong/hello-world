## Webpack-vue

<code>node v8.11.0</code> &nbsp; <code>yarn v1.7.0</code>

#### Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# production
yarn run build

```

#### 项目目录

``` bash

│  .babelrc
│  .gitignore
│  favicon.ico
│  index.html                       // 打包生成的 html
│  indexOri.html                    // html 模板
│  package.json
│  postcss.config.js
│  README.md
│  yarn.lock
│  
├─build                             // 打包后的文件
├─config
│      webpack.base.config.js       // 基本配置文件
│      webpack.dev.config.js        // 开发模式配置文件
│      webpack.prod.config.js       // 打包配置文件
│      
└─src
    │  app.vue
    │  main.js                      // 入口文件文件
    │  
    ├─i18n
    │      en-US.js                 // 英文包
    │      index.js                 // 国际化配置
    │      zh-CN.js                 // 中文包
    │      
    ├─router
    │      index.js                 // 路由配置文件
    │      router.js                // 路由文件
    │      
    ├─store
    │      store.js                 // 仓库
    │      
    └─views
        └─main
                main.vue            // 视图

```

#### 包含的基本功能：

>* vue 2.5.16
>* 储存：vuex 3.0.1
>* 路由：vue-router 3.0.1
>* 国际化：vue-i18n 8.2.1
>* 基于promise的HTTP库 axios: 0.18.0
>* 管理 Cookie：js-cookie 2.2.0
>* 函数库：jquery 3.3.1
>* 样式：bootstrap 4.1.3
>* 动画：animate.css 3.7.0
>* 代码高亮：highlight.js: 9.13.1
>* 路由懒加载
>* 分离 CSS
>* 支持 LESS
>* 支持 SCSS
>* 支持 PUG
>* 支持 ES2015
>* 等基本 webpack 配置

#### Contact me ：

[Send Email To Me][1]

[1]: http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zqqhoKm5pq2moI6oobajr6ei4K2how

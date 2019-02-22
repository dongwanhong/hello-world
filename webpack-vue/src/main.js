import Vue from 'vue';
import App from './views/App.vue';

// 路由
import {
    router
} from './router/index';
// 存储
import store from './store/store';
// 国际化
import i18n from './i18n/index';

// 全局使用工具函数
import util from './libs/util';
Vue.prototype.$util = util;

// 自定义全局组件
import defineSubassemblies from './components/defineSubassembly.js';
Vue.use(defineSubassemblies);

// 代码高亮
import highLight from './highlight/index';

// 引入 Bootstrap 样式文件
// 创建自己的 custom.scss 并使用它来覆盖内置的自定义变量
// import "custom";
import 'bootstrap/scss/bootstrap.scss';
// 按需引入 bootstrap 插件
import 'bootstrap/js/dist/dropdown';

// 引入动画
import 'animate.css';

// 启用插件
Vue.use(highLight);

new Vue({ // 创建 vue 实例
    // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
});

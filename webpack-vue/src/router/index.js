import Vue from 'vue';
import VueRouter from 'vue-router';
import {
    routers
} from './router';
import util from '../libs/util';

// 全局注册
Vue.use(VueRouter);

// 路由配置
const routerConfig = {
    // mode: history,
    routes: routers
};

// 创建 router 实例，然后传 `routes` 配置
export const router = new VueRouter(routerConfig);

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
    // util.LoadingBar.start();
    util.title(to.meta.title, router.app);
    next();
});

// 路由全局后置守卫
router.afterEach((to) => {
    // util.LoadingBar.finish();
    window.scrollTo(0, 0);
});
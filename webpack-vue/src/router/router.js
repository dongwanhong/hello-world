export const pageIndex = {
    path: '/',
    name: 'index',
    meta: {
        title: {
            // 默认的 title
            content: '首页',
            // 是否支持国际化
            i18n: true,
            // 国际化 key 值
            key: 'index_title'
        }
    },
    component: () => import('../views/main/Main.vue')
}
export const routers = [
    pageIndex
];

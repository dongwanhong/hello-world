import Vue from 'vue';
import Cookies from 'js-cookie';
import VueI18n from 'vue-i18n';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

// 使用插件
Vue.use(VueI18n);

// 根据浏览器语言设置语言
const navigatorLang = navigator.language;
const localLang = (navigatorLang === 'zh-CN' || navigatorLang === 'en-US') ? navigatorLang : false;
let lang = Cookies.get('locale') || localLang || 'zh-CN';
Vue.config.lang = lang;

const messages = {
    'zh-CN': {
        message: zhCN
    },
    'en-US': {
        message: enUS
    }
};
// Create VueI18n instance with options
const i18n = new VueI18n({
    // automatic set locale
    locale: lang,
    // manual set locale
    // locale: 'zh-CN',
    // set locale messages
    messages
});

export default i18n;

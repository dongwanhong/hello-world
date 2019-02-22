import Vue from 'vue';

// 引入使用 font-awesome
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    faCoffee
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
library.add(faCoffee);
Vue.config.productionTip = false;

const defineSubassemblies = {
    install: function (Vue) {
        Vue.component('font-awesome-icon', FontAwesomeIcon);
    }
};

export default defineSubassemblies;

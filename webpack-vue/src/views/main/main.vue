<template lang="pug">
    .container
        p.text-danger.animated.fadeIn.delay-2s {{ $t("message.hello") }}
        .dropdown
            button.btn.btn-secondary.dropdown-toggle(type="button", id="dropdownMenuButton", data-toggle="dropdown", aria-haspopup="true", aria-expanded="false") Dropdown button
            .dropdown-menu(aria-labelledby="dropdownMenuButton")
                a.dropdown-item(href="#") Action
                a.dropdown-item(href="#") Another action
                a.dropdown-item(href="#") Something else here
        br
        pre(v-highlight)
            code.js // something
        p
            button.btn.btn-default(@click="getData()") 获取数据
        p
            font-awesome-icon(icon="coffee")
</template>

<script>
import { getThemeIndex } from '../../api/cnode.js';
import Cookies from 'js-cookie';
export default {
    name: 'Main',
    data() {
        return {
            test: this.$store.state.count
        }
    },
    methods: {
        getData: () => getThemeIndex(),
    },
    created() {
        console.log($);
    }
}
</script>
<style lang="less">
.container {
    background: #c0c0c0;
}
</style>

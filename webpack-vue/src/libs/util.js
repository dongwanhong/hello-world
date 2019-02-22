import i18n from '../i18n/index'
const util = new Object();

util.title = function (title, vm) {
    let newTitle = vm.$t("message.basic_title");
    if (title) {
        newTitle += ' - ' + (title.i18n ? vm.$t((`message.${title.key}`)) : title);
    }
    window.document.title = newTitle;
};

/**
 * 
 * @param {string} nameStr 路由名称
 * @param {object} dataObj 路由参数
 */
util.toPage = function (nameStr, dataObj) {
    let obj = {
        name: nameStr,
        params: dataObj,
    };
    this.$router.push(obj);
}

// 节流函数，method 回调函数，context 上下文，delay 延迟
util.throttle = function (method, context, delay) {
    let wait = false;
    return function () {
        if (!wait) {
            method.apply(context, arguments);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        }
    }
};

// 防抖动函数，method 回调函数，context 上下文，event 传入的时间，delay 延迟
util.debounce = function (method, context, event, delay) {
    clearTimeout(method.tId);
    method.tId = setTimeout(() => {
        method.call(context, event);
    }, delay);
}

// this fun is created for a block named steps
util.toTop = function (ele, eleParent, n = 0) {
    let target = document.querySelector(ele);
    let parent = document.querySelector(eleParent);
    $(target).css({
        opacity: 0
    });
    $(target).animate({
        opacity: 1
    }, 2000);
    // parent.scrollTop = target.offsetTop - n;
    $(parent).animate({
        scrollTop: target.offsetTop - n
    }, 1000);
}

util.formatDate = function () {
    let dateTime = new Date();
    let year = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1;
    let day = dateTime.getDate();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
    let result = year +
        '-' + (month < 10 ? '0' + month : month) +
        '-' + (day < 10 ? '0' + day : day) +
        ' ' + (hour < 10 ? '0' + hour : hour) +
        ':' + (minute < 10 ? '0' + minute : minute) +
        ':' + (second < 10 ? '0' + second : second);
    return result;
}

export default util;

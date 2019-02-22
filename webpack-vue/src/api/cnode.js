import axios from 'axios';

// axios 配置
axios.defaults.timeout = 10000;

export const getThemeIndex = () => {
    return axios.get('https://cnodejs.org/api/v1/topics').then((data) => {
        console.log(data);
    });
};
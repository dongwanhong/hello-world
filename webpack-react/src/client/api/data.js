import axios from 'axios';

const getData = () => (axios.get('https://cnodejs.org/api/v1/topics'));

const getLocalData = () => (axios.get('/local/data'));

export {
  getData,
  getLocalData,
};

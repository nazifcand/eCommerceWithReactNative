import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://dummyjson.com',
});

export default axios;

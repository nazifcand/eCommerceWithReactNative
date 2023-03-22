import axios from './base.service';

export const fetchCategories = () => {
  return axios
    .get('/products/categories')
    .then(res => [null, res.data])
    .catch(err => [err]);
};

import axios from './base.service';

export const fetchProducts = () => {
  return axios
    .get('/products')
    .then(res => [null, res.data])
    .catch(err => [err]);
};

export const fetchProductById = (productID: number) => {
  return axios
    .get(`/products/${productID}`)
    .then(res => [null, res.data])
    .catch(err => [err]);
};

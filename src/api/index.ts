import axios from 'axios';

const getData = async () => {
  return axios.get('https://fakestoreapi.com/products');
};

export default getData;

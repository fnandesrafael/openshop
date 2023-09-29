import axios from 'axios';

const getData = async () => {
  const products = await axios.get('https://fakestoreapi.com/products');
  const categories = await axios.get(
    'https://fakestoreapi.com/products/categories',
  );

  return { categories: categories.data, products: products.data };
};

export default getData;

import axios from 'axios';

export type ProductProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

const getData = async () => {
  const products = await axios.get<Array<ProductProps>>(
    'https://fakestoreapi.com/products',
  );
  const categories = await axios.get<Array<string>>(
    'https://fakestoreapi.com/products/categories',
  );

  return { categories: categories.data, products: products.data };
};

export default getData;

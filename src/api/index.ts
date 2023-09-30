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

const filterElectronics = (items: Array<string> | Array<ProductProps>) => {
  if (typeof items[0] === 'string') {
    const filteredItems = items.filter((item: string) => {
      return item !== 'electronics';
    });

    return filteredItems;
  }
  const filteredItems = items.filter((item: ProductProps) => {
    return item.category !== 'electronics';
  });

  return filteredItems;
};

const getData = async () => {
  const products = filterElectronics(
    (await axios.get('https://fakestoreapi.com/products')).data,
  );
  const categories = filterElectronics(
    (await axios.get('https://fakestoreapi.com/products/categories')).data,
  );

  return {
    categories,
    products,
  };
};

export default getData;

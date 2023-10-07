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

const filterElectronics = (items: Array<string | ProductProps>) => {
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

const getProducts = async (): Promise<Array<ProductProps>> => {
  const products = filterElectronics(
    await (
      await axios.get('https://fakestoreapi.com/products')
    ).data,
  ) as Array<ProductProps>;

  return products;
};

const getCategories = async (): Promise<Array<string>> => {
  const categories = filterElectronics(
    await (
      await axios.get('https://fakestoreapi.com/products/categories')
    ).data,
  ) as Array<string>;

  return categories;
};

export { getProducts, getCategories };

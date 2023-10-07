import { create } from 'zustand';
import { ProductProps } from '../api';

type ProductStoreProps = {
  products: Array<ProductProps>;
  filteredProducts: Array<ProductProps>;
  setProducts: (payload: Array<ProductProps>) => void;
  filterProducts: (payload: Array<ProductProps>) => void;
};

const useProductStore = create<ProductStoreProps>((set) => ({
  products: [],
  filteredProducts: [],
  setProducts: (payload) => set(() => ({ products: payload })),
  filterProducts: (payload) => set(() => ({ filteredProducts: payload })),
}));

export default useProductStore;

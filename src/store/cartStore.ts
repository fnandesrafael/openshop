import { create } from 'zustand';
import { ProductProps } from '../api';

type CartStoreProps = {
  cartItems: Array<ProductProps>;
  addToCart: (payload: Array<ProductProps>) => void;
};

const useCartStore = create<CartStoreProps>((set) => ({
  cartItems: [],
  addToCart: (payload) =>
    set((prevState) => ({ cartItems: [...prevState.cartItems, ...payload] })),
}));

export default useCartStore;

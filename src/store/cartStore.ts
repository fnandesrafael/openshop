import { create } from 'zustand';
import { ProductProps } from '../api';

export type CartItemProps = {
  quantity: number;
} & ProductProps;

type CartStoreProps = {
  cartItems: Array<CartItemProps>;
  addToCart: (payload: CartItemProps) => void;
  removeFromCart: (payload: CartItemProps) => void;
  increaseQuantity: (payload: CartItemProps | ProductProps) => void;
  decreaseQuantity: (payload: CartItemProps | ProductProps) => void;
};

const useCartStore = create<CartStoreProps>((set) => ({
  cartItems: [],
  addToCart: (payload) =>
    set((prevState) => ({ cartItems: [...prevState.cartItems, payload] })),
  removeFromCart: (payload) =>
    set((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => {
        return item.id !== payload.id;
      }),
    })),
  increaseQuantity: (payload) =>
    set((prevState) => ({
      cartItems: prevState.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    })),
  decreaseQuantity: (payload) =>
    set((prevState) => ({
      cartItems: prevState.cartItems.map((item) => {
        if (item.id === payload.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    })),
}));

export default useCartStore;

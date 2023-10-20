import { CartItemProps } from '../store/cartStore';

const sum = (array: Array<CartItemProps>, key: 'quantity' | 'price') => {
  if (key === 'quantity') {
    return array.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
  }
  return array.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
};

export default sum;

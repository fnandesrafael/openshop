const sum = (array: Array<object>, key: 'quantity' | 'price') => {
  return array.reduce((acc, cur) => {
    return acc + cur[key];
  }, 0);
};

export default sum;

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import { ProductProps } from '../../api';

const mockedData: ProductProps = {
  category: '',
  description: '',
  id: 0,
  image: '',
  price: 0,
  rating: { count: 0, rate: 0 },
  title: '',
};

describe('<ProductCard/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<ProductCard data={mockedData} />);
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });
});

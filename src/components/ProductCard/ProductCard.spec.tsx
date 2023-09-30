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

  it('should have a sectin with role card', () => {
    const { getByRole } = render(<ProductCard data={mockedData} />);
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });

  it('should have two containers roled as contentinfo and preview', () => {
    const { getByRole } = render(<ProductCard data={mockedData} />);
    const [sutA, sutB] = [getByRole('preview'), getByRole('contentinfo')];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
  });

  it('should have an add to cart button', () => {
    const { getByRole } = render(<ProductCard data={mockedData} />);
    const sut = getByRole('add-btn');

    expect(sut).toBeInTheDocument();
  });
});

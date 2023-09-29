import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('<ProductCard/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<ProductCard />);
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });
});

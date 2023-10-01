import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Products from './Products';

describe('<Products/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Products />);
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });

  it('should have a sectin with role card', () => {
    const { getByRole } = render(<Products />);
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });

  it('should have two containers roled as contentinfo and preview', () => {
    const { getByRole } = render(<Products />);
    const [sutA, sutB] = [getByRole('preview'), getByRole('contentinfo')];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
  });

  it('should have an add to cart button', () => {
    const { getByRole } = render(<Products />);
    const sut = getByRole('add-btn');

    expect(sut).toBeInTheDocument();
  });
});

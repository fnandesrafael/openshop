import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Cart from './Cart';

describe('<Cart/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Cart />);

    const sut = getByRole('tab');

    expect(sut).toBeInTheDocument();
  });

  it('should have a header with a "Cart Items" heading, and a close button', () => {
    const { getByRole } = render(<Cart />);

    const [sutA, sutB] = [getByRole('tab'), getByRole('button')];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
  });
});

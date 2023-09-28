import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

describe('<Cart/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Cart />);
    const sut = getByRole('tab');

    expect(sut).toBeInTheDocument();
  });

  it('should have a header with a "Cart Items" heading, and a close button', () => {
    const { getByRole } = render(<Cart />);
    const [sutA, sutB, sutC] = [
      getByRole('header'),
      getByRole('heading'),
      getByRole('button'),
    ];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
    expect(sutC).toBeInTheDocument();
  });

  it("when the close button is clicked, it shouldn't be anymore in the document", () => {
    const { getByRole } = render(<Cart />);
    const sut = getByRole('button');

    userEvent.click(sut);

    expect(sut).not.toBeInTheDocument();
  });
});

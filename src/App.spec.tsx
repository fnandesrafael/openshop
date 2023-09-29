import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App /> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<App />);
    const sut = getByRole('application');

    expect(sut).toBeInTheDocument();
  });

  it("when first time rendered, Cart component shouldn't be in the document", () => {
    const { queryByRole } = render(<App />);
    const sut = queryByRole('tab');

    expect(sut).toBeNull();
  });

  it('when Header cart button is clicked, Cart component should be in the document', () => {
    const { getByRole } = render(<App />);
    const sutA = getByRole('cart-btn');

    fireEvent.click(sutA);

    const sutB = getByRole('tab');

    expect(sutB).toBeInTheDocument();
  });

  it("when Cart close button is clicked, Cart component shouldn't be in the document", async () => {
    const { getByRole, queryByRole } = render(<App />);
    const sutA = getByRole('cart-btn');

    fireEvent.click(sutA);

    const sutB = queryByRole('close-btn');

    fireEvent.click(sutB);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const sutC = queryByRole('tab');

    expect(sutC).toBeNull();
  });
});

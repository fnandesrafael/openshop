import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Cart from './Cart';

const mockedHook = jest.fn();

describe('<Cart/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Cart setCanShowCart={mockedHook} />);
    const sut = getByRole('tab');

    expect(sut).toBeInTheDocument();
  });

  it('should have a header with a "Cart Items" heading, and a close button', () => {
    const { getByRole } = render(<Cart setCanShowCart={mockedHook} />);
    const [sutA, sutB, sutC] = [
      getByRole('header'),
      getByRole('heading'),
      getByRole('button'),
    ];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
    expect(sutC).toBeInTheDocument();
  });

  it('when the close button is clicked, a setState hook is called', () => {
    const { getByRole } = render(<Cart setCanShowCart={mockedHook} />);
    const sut = getByRole('button');

    fireEvent.click(sut);

    expect(mockedHook).toHaveBeenCalledTimes(1);
  });
});

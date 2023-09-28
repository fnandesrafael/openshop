import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Header from './Header';

const mockedHook = jest.fn();

describe('<Header/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Header setCanShowCart={mockedHook} />);
    const sut = getByRole('header');

    expect(sut).toBeInTheDocument();
  });

  it('should have a heading with text "openshop"', () => {
    const { getByText } = render(<Header setCanShowCart={mockedHook} />);
    const sut = getByText(/openshop/i);

    expect(sut).toBeInTheDocument();
  });

  it('should have a button', () => {
    const { getByRole } = render(<Header setCanShowCart={mockedHook} />);
    const sut = getByRole('cart-btn');

    expect(sut).toBeInTheDocument();
  });

  it('should have a log element with cart items quantity', () => {
    const { getByRole } = render(<Header setCanShowCart={mockedHook} />);
    const sut = getByRole('log');

    expect(sut).toBeInTheDocument();
  });

  it('when header button is clicked, setState function is called', () => {
    const { getByRole } = render(<Header setCanShowCart={mockedHook} />);
    const sut = getByRole('cart-btn');

    fireEvent.click(sut);

    expect(mockedHook).toHaveBeenCalledTimes(1);
  });
});

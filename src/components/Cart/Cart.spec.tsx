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

  it('should have a header with and a close button', () => {
    const { getByRole } = render(<Cart setCanShowCart={mockedHook} />);
    const [sutA, sutB] = [getByRole('header'), getByRole('close-btn')];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
  });

  it('when the close button is clicked, a setState hook is called', () => {
    const { getByRole } = render(<Cart setCanShowCart={mockedHook} />);
    const sut = getByRole('close-btn');

    fireEvent.click(sut);

    expect(mockedHook).toHaveBeenCalledTimes(1);
  });
});

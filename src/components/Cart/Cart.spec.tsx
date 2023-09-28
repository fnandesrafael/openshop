import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Cart from './Cart';

describe('<Cart/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Cart />);

    const sut = getByRole('tab');

    expect(sut).toBeInTheDocument();
  });
});

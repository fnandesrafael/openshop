import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Header />);

    const sut = getByRole('header');

    expect(sut).toBeInTheDocument();
  });
});

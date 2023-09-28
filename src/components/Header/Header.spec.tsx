import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Header />);

    const sut = getByRole('header');

    expect(sut).toBeInTheDocument();
  });

  it('should have a heading with text "openshop"', () => {
    const { getByText } = render(<Header />);

    const sut = getByText(/openshop/i);

    expect(sut).toBeInTheDocument();
  });

  it('should have a button', () => {
    const { getByRole } = render(<Header />);

    const sut = getByRole('button');

    expect(sut).toBeInTheDocument();
  });
});

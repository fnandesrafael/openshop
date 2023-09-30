import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('<Hero/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Hero />);
    const sut = getByRole('hero');

    expect(sut).toBeInTheDocument();
  });
});

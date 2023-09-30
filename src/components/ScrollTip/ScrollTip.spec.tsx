import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ScrollTip from './ScrollTip';

describe('<ScrollTip/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<ScrollTip />);
    const sut = getByRole('icon');

    expect(sut).toBeInTheDocument();
  });
});

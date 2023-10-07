import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('<SearchBar/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<SearchBar />);
    const sut = getByRole('search');

    expect(sut).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SearchTags from './SearchTags';

describe('<SearchTag/> component', () => {
  it('should be in the document', () => {
    const { getAllByRole } = render(<SearchTags />);
    const sut = getAllByRole('searchbox');

    expect(sut).toHaveLength(4);
  });
});

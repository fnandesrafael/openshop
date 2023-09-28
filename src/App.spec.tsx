import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App /> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<App />);
    const sut = getByRole('application');

    expect(sut).toBeInTheDocument();
  });
});

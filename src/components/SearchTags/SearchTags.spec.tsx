import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchTags from './SearchTags';

const mockedSetState = jest.fn();
const mockedCategories = Array.from({ length: 4 });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [{}, mockedSetState],
  useEffect: jest.fn(),
}));
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(() => ({ data: mockedCategories })),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchInterval: 0 },
  },
});

describe('<SearchTag/> component', () => {
  it('should be in the document', () => {
    const { getAllByRole } = render(
      <QueryClientProvider client={queryClient}>
        <SearchTags />
      </QueryClientProvider>,
    );
    const sut = getAllByRole('searchbox');

    expect(sut).toHaveLength(4);
  });

  it('should call a setState SetState when checked', () => {
    const { getAllByRole } = render(
      <QueryClientProvider client={queryClient}>
        <SearchTags />
      </QueryClientProvider>,
    );
    const sut = getAllByRole('searchbox');

    fireEvent.click(sut[0]);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
  });
});

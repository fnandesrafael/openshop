import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Products from './Products';
import { ProductProps } from '../../api';

const mockedProducts: Array<ProductProps> = [
  {
    id: 0,
    image: '',
    title: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    category: '',
    description: '',
  },
];

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(() => ({ data: mockedProducts })),
}));
jest.mock('zustand', () => ({
  ...jest.requireActual('zustand'),
  create: jest.fn(() => (set) => ({
    products: mockedProducts,
    filteredProducts: [],
    setProducts: (payload) => set({ products: payload }),
    filterProducts: (payload) => set({ filteredProducts: payload }),
  })),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchInterval: 0 },
  },
});

describe('<Products/> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>,
    );
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });

  it('should have a sectin with role card', () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>,
    );
    const sut = getByRole('card');

    expect(sut).toBeInTheDocument();
  });

  it('should have two containers roled as contentinfo and preview', () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>,
    );
    const [sutA, sutB] = [getByRole('preview'), getByRole('contentinfo')];

    expect(sutA).toBeInTheDocument();
    expect(sutB).toBeInTheDocument();
  });

  it('should have an add to cart button', () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>,
    );
    const sut = getByRole('add-btn');

    expect(sut).toBeInTheDocument();
  });
});

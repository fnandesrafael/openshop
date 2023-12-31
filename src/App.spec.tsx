import 'intersection-observer';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react-dom/test-utils';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchInterval: 0 },
  },
});

describe('<App /> component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    const sut = getByRole('application');
    expect(sut).toBeInTheDocument();
  });

  it("when first time rendered, Cart component shouldn't be in the document", () => {
    const { queryByRole } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const sut = queryByRole('tab');

    expect(sut).toBeNull();
  });

  it('when Header cart button is clicked, Cart component should be in the document', () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const sutA = getByRole('cart-btn');

    act(() => {
      fireEvent.click(sutA);
    });

    const sutB = getByRole('tab');

    expect(sutB).toBeInTheDocument();
  });

  it("when Cart close button is clicked, Cart component shouldn't be in the document", async () => {
    const { getByRole, queryByRole } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const sutA = getByRole('cart-btn');

    act(() => {
      fireEvent.click(sutA);
    });

    const sutB = queryByRole('close-btn');

    act(() => {
      fireEvent.click(sutB);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const sutC = queryByRole('tab');

    expect(sutC).toBeNull();
  });
});

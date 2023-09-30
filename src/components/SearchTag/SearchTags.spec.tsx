import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import SearchTags from './SearchTags';

const mockedCategories = ['a', 'b', 'c', 'd'];
const mockedSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [{}, mockedSetState],
}));

describe('<SearchTag/> component', () => {
  it('should be in the document', () => {
    const { getAllByRole } = render(
      <SearchTags categories={mockedCategories} />,
    );
    const sut = getAllByRole('searchbox');

    expect(sut).toHaveLength(4);
  });

  it('should call a setState SetState when checked', () => {
    const { getAllByRole } = render(
      <SearchTags categories={mockedCategories} />,
    );
    const sut = getAllByRole('searchbox');

    fireEvent.click(sut[0]);

    expect(mockedSetState).toHaveBeenCalledTimes(1);
  });
});

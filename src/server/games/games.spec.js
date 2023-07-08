import { screen, render } from '@testing-library/react';
import "@testing-library/jest-dom";
import fetchAllGames from './index.ts'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [], meta: {}}),
  })
);

describe('Success Games fetch function', () => {
  it('fetches data from server when server returns a successful response', async () => {
    const response = await fetchAllGames({ pageNumber: 1 });
    expect(response).toEqual({
      success: true,
      data: [],
      meta: {},
      error: null
    })
  });
});

describe('Error Games fetch function', () => {
  it('fetches data from server when server returns a error response', async () => {
      fetch.mockRejectedValueOnce({ error: 'something goes wrong' });
      const response = await fetchAllGames({ pageNumber: 1 });
      expect(response).toEqual({
        success: false,
        data: [],
        meta: {},
        error: 'Unknown error'
      });
  });
});


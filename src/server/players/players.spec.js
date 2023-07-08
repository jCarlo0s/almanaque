import { screen, render } from '@testing-library/react';
import "@testing-library/jest-dom";
import fetchPlayers from './index.ts'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: []}),
  })
);

describe('Success Player fetch function', () => {
  it('fetches data from server when server returns a successful response', async () => {
    const response = await fetchPlayers();
    expect(response).toEqual({
      success: true,
      data: [],
      error: null
    })
  });
});

describe('Error Players fetch function', () => {
  it('fetches data from server when server returns a error response', async () => {
      fetch.mockRejectedValueOnce({ error: 'something goes wrong' });
      const response = await fetchPlayers();
      expect(response).toEqual({
        success: false,
        data: [],
        error: 'Unknown error'
      });
  });
});


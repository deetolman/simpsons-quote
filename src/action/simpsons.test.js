import { fetchQuote, FETCH_QUOTE, FETCH_QUOTES_LOADING } from './simpsons';

jest.mock('../services/simpsonsApi.js');

describe('action test', () => {
  it('fetches a quote', () => {
    const action = fetchQuote();
    expect(action).toEqual({
      type: FETCH_QUOTE,
      loadStart: FETCH_QUOTES_LOADING,
      payload: Promise.resolve({
        quote: 'quote'
      })
    });
  });
});

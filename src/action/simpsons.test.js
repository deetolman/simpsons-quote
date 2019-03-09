import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchQuote, FETCH_QUOTE } from './simpsons';

jest.mock('../services/simpsonsApi.js');

describe('action test', () => {
  it('fetches a quote', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer, 
      applyMiddleware(...middleware)
    );
    store.dispatch(fetchQuote());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_QUOTE,
        payload: undefined
      });
      done();
    }, 500);
  });
});

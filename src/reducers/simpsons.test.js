import reducer from './simpsons';
import { FETCH_QUOTE } from '../action/simpsons';

describe('reducer test', () => {
  it('can fetch quote', () => {
    const state =  {
      quote: '',
      characterName: '',
      characterImage: '',
      loading: true
    };

    const reducerState = reducer(state, {
      type: FETCH_QUOTE,
      payload: {
        quote: 'quote',
        characterName: 'Bart',
        characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
        loading: false
      }
    });
    expect(reducerState).toEqual({ quote: 'quote', characterName: 'Bart', characterImage:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185', loading: false });
  });
});
 

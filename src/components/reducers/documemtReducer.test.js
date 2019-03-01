import reducer from './documentReducer';

describe('reducer test', () => {
  it('can update a markdown', () => {
    const state = {
      markdown: ''
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_DOCUMENT',
      payload: 'hello'
    });
    expect(updatedState).toEqual({ markdown: 'hello' });
  });
});

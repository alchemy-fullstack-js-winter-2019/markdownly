import { getMarkdowns } from './markdowns';

describe('markdown selectors', () => {
  it('selects an array of markdowns', () => {
    const state = {
      markdowns: { 
        markdowns: [
          { title: '# banana', body: 'yolo 420' }, 
          { title: '## banana', body: 'nananana' }] 
      },
      markdownReducers: { title: '', body: '' }
    };

    const selectedMarkdowns = getMarkdowns(state);
    expect(selectedMarkdowns).toEqual([{ title: '# banana', body: 'yolo 420' }, { title: '## banana', body: 'nananana' }]);
  });
});

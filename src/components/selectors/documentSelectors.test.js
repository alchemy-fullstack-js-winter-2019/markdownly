import { getDocument } from './documentSelectors';

describe('selector test', () => {
  it('can test a document selector', () => {
    const state = {
      markdown: {
        markdown: 'cat'
      } 
    };
    const selectedMarkdown = getDocument(state);
    expect(selectedMarkdown).toEqual('cat');
  });
});

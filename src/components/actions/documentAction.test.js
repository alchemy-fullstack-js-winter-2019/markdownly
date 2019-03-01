import { UPDATE_DOCUMENT, updateDocument } from './documentAction';

describe('action test', () => {
  it('creates an update doc action', () => {
    const action = updateDocument('document');

    expect(action).toEqual({ 
      type: UPDATE_DOCUMENT,
      payload: 'document'
    });
  });
});

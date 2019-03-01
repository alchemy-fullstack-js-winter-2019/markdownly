import { 
  UPDATE_DOCUMENT
} from '../actions/documentAction';

const initialState = {
  markdown: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_DOCUMENT:
      return {
        markdown: action.payload
      };
    default: 
      return state;
  }
}

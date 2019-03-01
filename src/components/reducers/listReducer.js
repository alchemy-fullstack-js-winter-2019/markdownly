import { ADD_MARKDOWN } from '../actions/listAction';

const initialState = {
  markdowns: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_MARKDOWN:
      return {
        markdowns: [...state.markdowns, action.payload]
      };
    default: 
      return state;
  }
}

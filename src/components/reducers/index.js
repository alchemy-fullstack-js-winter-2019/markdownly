import { combineReducers } from 'redux';
import markdown from './documentReducer';
import markdownList from './listReducer';

export default combineReducers({
  markdown,
  markdownList
});

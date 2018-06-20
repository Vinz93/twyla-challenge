import { combineReducers } from 'redux';
import user from './user';
import books from './books';

const rootReducer = combineReducers({
  user,
  books,
});

export default rootReducer;

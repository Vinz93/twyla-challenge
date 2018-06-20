import { FETCH_BOOKS, CREATE_BOOK_SUCCESS } from '../constants/ActionTypes';

export default function counter(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...action.response];
    case CREATE_BOOK_SUCCESS:
      return [...state, action.response];
    default:
      return state;
  }
}

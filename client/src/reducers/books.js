import { FETCH_BOOKS } from '../constants/ActionTypes';

export default function counter(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...action.response];
    default:
      return state;
  }
}

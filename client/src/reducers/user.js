import { CREATE_USER } from '../constants/ActionTypes';

export default function counter(state = null, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        userName: action.userName,
      };
    default:
      return state;
  }
}

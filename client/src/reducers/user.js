import { CREATE_USER_SUCCESS } from '../constants/ActionTypes';

export default function counter(state = null, action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        userName: action.response.newUser.userName,
        id: action.response.newUser.id,
      };
    default:
      return state;
  }
}

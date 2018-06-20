import api from '../api';
import { CREATE_USER } from '../constans/ActionTypes';

export const createUser = (userName) => (dispatch, getState) => {
  return api.createUser(userName).then(response => {
    dispatch({
      type: CREATE_USER,
      userName: response,
    });
  });
};

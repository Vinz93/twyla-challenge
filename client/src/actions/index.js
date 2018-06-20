import * as api from '../api';
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE, FETCH_BOOKS } from '../constants/ActionTypes';

export const createUser = (userName) => (dispatch, getState) => {
  return api.createUser(userName).then(response => {
    dispatch({
      type: CREATE_USER_SUCCESS,
      response,
    });
    localStorage.setItem('token', response.token);
  },
  err => {
    dispatch({
      type: CREATE_USER_FAILURE,
      message: err.message || 'something went wrong with log in',
    });
  });
};

export const fetchBooks = () => (dispatch, getState) => {
  return api.fetchBooks().then(response => {
    dispatch({
      type: FETCH_BOOKS,
      response,
    });
  });
};

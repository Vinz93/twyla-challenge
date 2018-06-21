import * as api from '../api';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
  FETCH_BOOKS } from '../constants/ActionTypes';

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

export const createBook = (book) => (dispatch, getState) => {
  return api.createBook(book).then(response => {
    dispatch({
      type: CREATE_BOOK_SUCCESS,
      response,
    });
  },
  err => {
    dispatch({
      type: CREATE_BOOK_FAILURE,
      message: err.message || 'something went wrong creating the book',
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

export const reviewBook = (review, bookId) => (dispatch, getState) => {
  return api.reviewBook(review, bookId).then(response => {
    dispatch({
      type: CREATE_REVIEW_SUCCESS,
      response,
    });
  },
  err => {
    dispatch({
      type: CREATE_REVIEW_FAILURE,
      message: err.message || 'something went wrong reviewing the book',
    });
  });
};
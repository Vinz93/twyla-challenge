import React from 'react';

import BookModal from './BookModal';
import ReviewForm from '../containers/ReviewForm';

const Book = ({ book }) => (
  <li className="book">
    <p className="title">{book.title}</p>
    <p className="isbn"> ISBN: {book.isbn}</p>
    <BookModal buttonName={"Add review"}>
      <ReviewForm bookId={book.id} />
    </BookModal>
  </li>
);

export default Book;

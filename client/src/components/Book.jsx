import React from 'react';

import BookModal from './BookModal';
import ReviewForm from '../containers/ReviewForm';

const Book = ({ book }) => {
  const reviews = book.reviews || [];
  return (
    <li className="book">
      <p className="title">{book.title}</p>
      <div className="book-info">
        <p className="isbn"> ISBN: {book.isbn}</p>
        <p className="isbn"> Added by: {book.addedBy}</p>
      </div>
      <div className="reviews-container">
      <h3>Reviews</h3>
      <BookModal buttonName={"Add review"}>
        <ReviewForm bookId={book.id} />
      </BookModal>
        <ul>
          {
            reviews.map(({ rate, comment, user, id }) => (
            <li key={id} className="comment">
              <span>{user.userName}</span>
              <span> {rate}/5</span>
              <p>{`"${comment}"`}</p>
            </li>
            ))}
        </ul>
      </div>
    </li>
);
};

export default Book;

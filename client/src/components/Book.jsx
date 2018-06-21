import React from 'react';

const Book = ({ book }) => (
  <li className="book">
    <p className="title">{book.title}</p>
    <p className="isbn"> ISBN: {book.isbn}</p>
  </li>
);

export default Book;

import React from 'react';

const Book = ({ book }) => (
  <li className="book">
    <p>{book.title}</p>
    <p>{book.isbn}</p>
  </li>
);

export default Book;

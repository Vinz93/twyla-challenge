import React from 'react';

import Book from './Book';

const BookList = ({ books }) => (
  <ul className="book-list">
    {books.map(book => <Book key={book.id} book={book}/>)}
  </ul>
);

export default BookList;

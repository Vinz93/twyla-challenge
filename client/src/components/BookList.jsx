import React from 'react';

import Book from './Book';

const BookList = ({ books }) => {
  if (books.lenght === 0) {
    return (
      <p>No books added yet!</p>
    );
  } else {
    return (
    <ul className="book-list">
    {books.map(book => <Book key={book.id} book={book}/>)}
  </ul>);
  }
};


export default BookList;

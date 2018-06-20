import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions';

const BookList = ({ books }) => (
  <ul>
    {books.map(book => {
      return <li key={book.id}>{book.title}</li>;
    })}
  </ul>
);

class BookFeed extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <div className="book-feed">
        Bookfeed
        <BookList books={books}/>
      </div>
    );
  }
}

BookFeed.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
const mapStateToProps = ({ books }) => ({ books });
export default connect(mapStateToProps, { fetchBooks })(BookFeed);

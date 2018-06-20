import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions';
import BookList from '../components/BookList';
import BookModal from '../components/BookModal';

class BookFeed extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <div className="book-feed">
        Bookfeed
        <BookModal />
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

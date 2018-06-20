import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { createBook } from '../actions';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', isbn: '' };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleIsbn = this.handleIsbn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleIsbn(event) {
    this.setState({ isbn: event.target.value });
  }
  handleSubmit(event) {
    const { title, isbn } = this.state;
    this.props.createBook({
      title,
      isbn
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="book-form">
        <h2>New Book</h2>
        <form onSubmit={this.handleSubmit}>
        <label className="input-group">
          <span className="input-label">Title</span>
          <input type="text" value={this.state.title} onChange={this.handleTitle}/>
        </label>
        <label className="input-group">
          <span className="input-label">isbn</span>
          <input type="text" value={this.state.isbn} onChange={this.handleIsbn}/>
        </label>
        <input className="send" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
}
export default connect(null, { createBook })(BookForm);

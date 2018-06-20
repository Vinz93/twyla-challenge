import React, { Component } from 'react';

class BookForm extends Component {
  render() {
    return (
      <div>
        <h2>New Book</h2>
        <form onSubmit={this.handleSubmit}>
        <label className="input-group">
          <span className="input-label">Title</span>
          <input type="text" value={0} />
          <span className="bar"></span>
        </label>
        <input className="send" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BookForm;

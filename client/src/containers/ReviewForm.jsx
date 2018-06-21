import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { reviewBook } from '../actions';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { rate: 1, comment: '' };
    this.handleRate = this.handleRate.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRate(event) {
    const rate = event.target.value;
    this.setState({ rate });
  }
  handleComment(event) {
    this.setState({ comment: event.target.value });
  }
  handleSubmit(event) {
    const { rate, comment } = this.state;
    if (rate > 0 && rate <= 5) {
      this.props.reviewBook({
        rate,
        comment
      }, this.props.bookId);
    } else {
      alert('rate must be between');
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="review-form">
        <h2>Review</h2>
        <form onSubmit={this.handleSubmit}>
        <label className="input-group">
          <span className="input-label">Rate</span>
          <input type="number" value={this.state.rate} onChange={this.handleRate}/>
        </label>
        <label className="input-group">
          <span className="input-label">comment</span>
          <input type="text" value={this.state.comment} onChange={this.handleComment}/>
        </label>
        <input className="send" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  reviewBook: PropTypes.func.isRequired,
  bookId: PropTypes.string.isRequired,
};
export default connect(null, { reviewBook })(ReviewForm);

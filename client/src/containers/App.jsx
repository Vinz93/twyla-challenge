import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import BookFeed from './BookFeed';
import { createUser } from '../actions';


class App extends Component {
  render() {
    const { createUser: create, user } = this.props;
    const token = localStorage.getItem('token');
    if (!token && !user) {
      return (
        <div className="main-app-container">
          <Login createUser={create} />
        </div>
      );
    }
    return (<BookFeed />);
  }
}

App.propTypes = {
  createUser: PropTypes.func.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = ({ user }) => ({
  user
});


export default connect(mapStateToProps, { createUser })(App);

import React, { Component, PropTypes } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
 handleSubmit(event) {
   const { value } = this.state;
   // fetch to server /post users
  //  console.log(value);
   this.props.createUser(value);
   event.preventDefault();
 }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <label className="input-group">
      <span className="input-label">Whats your username ?</span>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <span className="bar"></span>
    </label>
    <input className="send" type="submit" value="Submit" />
    </form>
    );
  }
}

Login.propTypes = {
  createUser: PropTypes.func.isRequired,
};
export default Login;

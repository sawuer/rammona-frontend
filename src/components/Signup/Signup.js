import React, { Component } from 'react';
import fetcher from '../../utils/fetcher';
// import { connect } from 'react-redux';
// import { signup } from '../../actions/signup.js';

export default class Signup extends Component {
  state = {
    user_id: '',
    user_password: '',
    user_password_confirm: '',
  };

  signup = () => fetcher({
    method: 'post',
    path: 'http://localhost:8030/signup',
    body: {
      user_id: this.state.user_id,
      user_password: this.state.user_password,
    },
  }).then(resp => console.log(resp))
  

  render() {
    return (
      <div>
        <h1>Signup</h1>
        {/* <div>Store user.email: {this.props.user.email}</div> */}
        <div>State user.email: {this.state.user_id}</div>
        <div>State user.email: {this.state.user_password}</div>
        <input
          type="text"
          placeholder="Email"
          onChange={e => this.setState({ user_id: e.target.value })} 
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.setState({ user_password: e.target.value })} 
        />

        <button
          onClick={() => this.signup()}
        >Submit</button>

      </div>
    );
  }
}

// export default connect(state => ({
//   user: state.user,
// }), {
//   signup,
// })(Signup);
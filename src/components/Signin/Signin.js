import React, { Component } from 'react'
import './Signin.css'
import logo from '../../img/logo.png' 
import Alert from './../Alert/Alert'

import fetcher from '../../utils/fetcher'
import { connect } from 'react-redux';

// actions
import put_user_email from '../../actions/put_user_email.js';
import put_user_token from '../../actions/put_user_token.js';

class Signin extends Component {
  state = {
    user_id: 'reywos@yandex.ru',
    user_password: '123',
    error_wrong_user_data: false,
  }

  signin = () => fetcher({
    method: 'post',
    path: 'http://localhost:8030/signin',
    body: {
      user_id: this.state.user_id,
      user_password: this.state.user_password,
    },
  }).then(resp => {
    if (resp === 'wrong email and password' || resp === 'user not found or not veryfied') {
      return this.setState({ error_wrong_user_data: true });
    }
    console.log(resp)
    this.props.put_user_token(resp);
    this.props.put_user_email(this.state.user_id);
    this.props.history.push('/transactions');
  });

  render() {
    return (
      <div className="Signin">
        <div className="Signin-container">
          <img className="Signin-logo" alt={'logo'} src={logo} />

          <div className="Signin-inputs"> 
            <div className="Signin-input_container">
              <input 
                className="Signin-input"
                type="text"
                placeholder="Email"
                value={this.state.user_id}
                onChange={e => this.setState({ user_id: e.target.value })} 
              />
            </div>

            <div className="Signin-input_container">
              <input 
                className="Signin-input"
                type="password"
                placeholder="Password"
                value={this.state.user_password}
                onChange={e => this.setState({ user_password: e.target.value })} 
              />
            </div>

            {this.state.error_wrong_user_data ? <Alert
              msg={'Wrong email and password'}
              style={{ 'background': 'red' }}/> 
            : ''}

            <button
              className="Signin-button"
              onClick={() => this.signin()}
            >Sign In</button>

            <button
              className=""
              onClick={() => this.props.history.push('/signup')}
            >Or signup</button>

            <button className="Nav-item"
              onClick={() => this.props.history.push('/settings')}>Settings</button>
            <button className="Nav-item"
              onClick={() => this.props.history.push('/transactions')}>Transactions</button>


          </div> 

        </div>
      </div>
    )
  }
}

export default connect(({
  
}) => ({

}), {
  put_user_token,
  put_user_email,
})(Signin);
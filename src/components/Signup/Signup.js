import React, { Component } from 'react'
import './Signup.css'
import logo from '../../img/logo.png' 
import Alert from './../Alert/Alert'

import fetcher from '../../utils/fetcher'
// import { connect } from 'react-redux';
// import { signup } from '../../actions/signup.js';

export default class Signup extends Component {
  state = {
    user_id: '',
    user_password: '',
    user_password_confirm: '',
    error_user_already_exists: false,
    error_empty_fields: false,
    error_passwords_not_match: false,
    signup_success: false,
  }

  signup = () => {
    this.setState({
      error_user_already_exists: false,
      error_empty_fields: false,
      error_passwords_not_match: false,
    })
    if (this.state.user_password !== this.state.user_password_confirm) {
      return this.setState({ error_passwords_not_match: true })
    }
    return fetcher({
      method: 'post',
      path: 'http://localhost:8030/signup',
      body: {
        user_id: this.state.user_id,
        user_password: this.state.user_password,
      },
    }).then(resp => {

      if (resp === 'user already exists') {
        return this.setState({ error_user_already_exists: true })
      }
      if (resp === 'empty fields') {
        return this.setState({ error_empty_fields: true })
      }
      this.setState({ signup_success: true })
    })
  }
  

  render() {
    return (
      <div className="Signup">
        <div className="Signup-container">
          <img className="Signup-logo" alt={'logo'} src={logo} />
          
          {!this.state.signup_success ? 
            <div className="Signup-inputs"> 
              <div className="Signup-input_container">
                <input 
                  className="Signup-input"
                  type="text"
                  placeholder="Email"
                  onChange={e => this.setState({ user_id: e.target.value })} 
                />
              </div>

              <div className="Signup-input_container">
                <input 
                  className="Signup-input"
                  type="password"
                  placeholder="Password"
                  onChange={e => this.setState({ user_password: e.target.value })} 
                />
              </div>

              <div className="Signup-input_container">
                <input 
                  className="Signup-input"
                  type="password"
                  placeholder="Confirm password"
                  onChange={e => this.setState({ user_password_confirm: e.target.value })} 
                />
              </div>

              {this.state.error_user_already_exists ? 
                <Alert 
                  msg={'User already exists'}
                  style={{'background': 'red'}}
                /> : ''
              }
              
              {this.state.error_empty_fields ? 
                <Alert 
                  msg={'All fields must be filled in'}
                  style={{'background': 'red'}}
                /> : ''
              }
              
              {this.state.error_passwords_not_match ? 
                <Alert 
                  msg={'Passwords not match'}
                  style={{'background': 'red'}}
                /> : ''
              }

              <button
                className="Signup-button"
                onClick={() => this.signup()}
              >Sign Up</button>
            
            </div> : <Alert
              msg={'Check your email'}
              style={{ 'background': 'green' }}
            />
          }

        </div>
        {/* <div>Store user.email: {this.props.user.email}</div> */}
      </div>
    )
  }
}

// export default connect(state => ({
//   user: state.user,
// }), {
//   signup,
// })(Signup);
import React, { Component } from 'react'
import './Signin.css'
import logo from '../../img/logo.png' 
// import Alert from './../Alert/Alert'

import fetcher from '../../utils/fetcher'
// import { connect } from 'react-redux';
// import { signup } from '../../actions/signup.js';

export default class Signin extends Component {
  state = {
    user_id: '',
    user_password: '',
  }

  signin = () => fetcher({
    method: 'post',
    path: 'http://localhost:8030/signin',
    body: {
      user_id: this.state.user_id,
      user_password: this.state.user_password,
    },
  }).then(resp => {
    console.log(resp)
    // this.setState({
    //   error_user_already_exists: false,
    //   error_empty_fields: false,
    // })
    // if (resp === 'user already exists') {
    //   return this.setState({ error_user_already_exists: true })
    // }
    // if (resp === 'empty fields') {
    //   return this.setState({ error_empty_fields: true })
    // }
    // this.setState({ signup_success: true })
  })
  

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
                  onChange={e => this.setState({ user_id: e.target.value })} 
                />
              </div>

              <div className="Signin-input_container">
                <input 
                  className="Signin-input"
                  type="password"
                  placeholder="Password"
                  onChange={e => this.setState({ user_password: e.target.value })} 
                />
              </div>

              {/* {this.state.error_user_already_exists ? 
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
              } */}

              <button
                className="Signin-button"
                onClick={() => this.signin()}
              >Sign In</button>
            
            </div> 

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
// })(Signin);
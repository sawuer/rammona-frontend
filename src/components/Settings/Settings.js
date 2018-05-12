import React, { Component } from 'react'
import './Settings.css'

// import Alert from './../Alert/Alert'
import Nav from './../Nav/Nav'

// import fetcher from '../../utils/fetcher'
import { connect } from 'react-redux';

class Settings extends Component {
  state = {
  }

  componentDidMount = () => {
    if (this.props.user_token === '') {
      return this.props.history.push('/signin');
    }
    // fetcher({
    //   method: 'post',
    //   path: `http://localhost:8030/api/check_token/${this.props.user_token}`,
    // }).then(resp => {
    //   if (resp == 'bad') {
    //     return this.props.history.push('/signin');
    //   }
    // });
  }

  render() {
    return (
      <div className="Settings">
        <Nav />
        <div className="Settings-container">
          <h1>Settings</h1>
          <div>{this.props.user_email}</div>
        </div>
      </div>
    )
  }
}

export default connect(({ signin: { user_token, user_email } }) => ({
  user_token,
  user_email,
}), {

})(Settings);
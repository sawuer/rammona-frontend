import React, { Component } from 'react'
import './Transactions.css'
// import Alert from './../Alert/Alert'
import Nav from './../Nav/Nav'

// import fetcher from '../../utils/fetcher'
import { connect } from 'react-redux';

class Transactions extends Component {
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
      <div className="Transactions">
        <Nav />
        <div className="Transactions-container">
          <h1>Transactions</h1>
          <div>{this.props.user_email}</div>
        </div>
      </div>
    )
  }
}

export default connect(({ signin: { user_token, user_email }}) => ({
  user_token,
  user_email,
}), {

})(Transactions);
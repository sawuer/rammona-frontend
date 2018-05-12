import React, { Component } from 'react'
import './Transactions.css'
// import Alert from './../Alert/Alert'
import Nav from './../Nav/Nav'
import CommonTable from './../CommonTable/CommonTable'

import fetcher from '../../utils/fetcher'
import { connect } from 'react-redux';

import {
  get_transactions,
} from '../../store/transactions/actions/_all.js';


class Transactions extends Component {

  componentDidMount () {
    if (this.props.user_token === '') {
      return this.props.history.push('/signin');
    }
    this.set_transactions();
  }

  set_transactions (query) {
    fetcher({
      token: this.props.user_token,
      path: `http://localhost:8030/api/transactions${query && query !== [] ? query: ''}`,
    }).then(resp => {
      this.props.get_transactions(resp)
      // console.log(resp)
    });
  }

  // filter = [
  //   { "attr": "transaction_type_name", "val": "да" },
  //   { "attr": "transaction_name", "val": "к" },
  //   { "attr": "transaction_amount", "val": 0 }
  // ]

  set_filters = query => {
    console.log(JSON.stringify(query))
    this.set_transactions('?filter=' + JSON.stringify(query))
  }

  render () {
    return (
      <div className="Transactions">
        <Nav />
        <div className="Transactions-container">
          <CommonTable
            features={this.props.transactions}
            set_filters={this.set_filters}
            date_field={'transaction_timestamp'}
            attrs={['transaction_name', 'transaction_type_name', 'transaction_timestamp', 'transaction_amount']}
            headers={[
              { title: 'Name', type: 'text' }, 
              { title: 'Type', type: 'text' },
              { title: 'Date', type: 'text' },
              { title: 'Amount', type: 'number' },
            ]}
          />
        </div>
      </div>
    )
  }
}

export default connect(({ 
  signin: { user_token },
  transactions: { transactions, transactions_filters },
}) => ({
  user_token,
  transactions,
  transactions_filters,
}), {
  get_transactions,
})(Transactions);
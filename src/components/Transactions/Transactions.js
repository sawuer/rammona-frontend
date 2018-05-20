import React, { Component } from 'react'
import './Transactions.css'
// import Alert from './../Alert/Alert'
import Nav from './../Nav/Nav'
import CommonTable from './../CommonTable/CommonTable'
import Bullets from './../Bullets/Bullets'

import fetcher from '../../utils/fetcher'
import { connect } from 'react-redux';

import {
  get_transactions,
  get_transaction_types,
  get_transactions_count,
  set_transactions_limit,
  set_transactions_offset,
} from '../../store/transactions/actions/_all.js';


class Transactions extends Component {

  componentDidMount () {
    if (this.props.user_token === '') {
      return this.props.history.push('/signin');
    }
    this.set_transactions();
    this.set_transaction_types();
    
  }

  set_transactions_count () {
    fetcher({
      token: this.props.user_token,
      path: 'http://localhost:8030/api/transactions/count',
    }).then(resp => {
      this.props.get_transactions_count(resp)
    });
  }

  set_transactions (query) {
    fetcher({
      token: this.props.user_token,
      path: `http://localhost:8030/api/transactions?offset=${this.props.transactions_offset}&limit=${this.props.transactions_limit}&${query && query !== [] ? query: ''}`,
    }).then(resp => {
      this.props.get_transactions(resp)
      this.set_transactions_count();
    });
  }

  set_transaction_types () {
    fetcher({
      token: this.props.user_token,
      path: 'http://localhost:8030/api/transaction_types',
    }).then(resp => this.props.get_transaction_types(resp));
  }

  create_row = new_row => {
    fetcher({
      method: 'POST',
      body: { 
        ...new_row,
        transaction_type_id: new_row.transaction_type_name,
      },
      token: this.props.user_token,
      path: 'http://localhost:8030/api/transactions',
    }).then(resp => {
      console.log(resp)
      this.set_transactions()
    });
  }

  delete_row = ({ transaction_id }) => {
    fetcher({
      method: 'DELETE',
      body: { transaction_id },
      token: this.props.user_token,
      path: 'http://localhost:8030/api/transactions',
    }).then(resp => {
      console.log(resp)
      this.set_transactions()
    });
  }

  set_offset = async result => {
    console.log(result)
    await this.props.set_transactions_offset(result)
    return this.set_transactions();

  }

  set_filters = query => {
    this.set_transactions('filter=' + JSON.stringify(query))
  }

  render () {
    return (
      <div className="Transactions">
        <Nav />

        <div className="Transactions-container">
          <div className="Transactions-bullets">
            <Bullets 
              bullets={this.props.transaction_types}
              bullet_title={'transaction_type_name'}
              bullet_id={'transaction_type_id'}
            />
          </div>

          <div className="Transactions-separator"></div>

          <div className="Transactions-table">
            <CommonTable
              event_set_filters={this.set_filters}
              event_create_row={this.create_row}
              event_delete_row={this.delete_row}
              event_choose_page={this.set_offset}
              features={this.props.transactions}
              features_count={this.props.transactions_count}
              limit={this.props.transactions_limit}
              attrs={[
                { title: 'transaction_name', input_type: 'text' }, 
                { 
                  title: 'transaction_type_name',
                  input_type: 'select',
                  select_list: this.props.transaction_types,
                  value_field: 'transaction_type_id',
                  name_field: 'transaction_type_name',
                }, 
                { title: 'transaction_timestamp', input_type: 'date' }, 
                { title: 'transaction_amount', input_type: 'number' }
              ]}
              headers={['Name', 'Type', 'Date', 'Amount']}
            />
          </div>

          <div className="Transactions-separator"></div>


        </div>
      </div>
    )
  }
}

export default connect(({ 
  signin: { user_token },
  transactions: { 
    transactions,
    transaction_types,
    transactions_filters,
    transactions_count,
    transactions_limit,
    transactions_offset,
  },
}) => ({
  user_token,
  transactions,
  transaction_types,
  transactions_filters,
  transactions_count,
  transactions_limit,
  transactions_offset,
}), {
  get_transactions,
  get_transactions_count,
  get_transaction_types,
  set_transactions_limit,
  set_transactions_offset,
})(Transactions);
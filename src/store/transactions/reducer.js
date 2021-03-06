import initialState from './state.js';

export default (state = initialState, { val, type }) => {
  switch (type) {

    case 'GET_TRANSACTIONS':
      return { ...state, transactions: val };

    case 'GET_TRANSACTION_TYPES':
      return { ...state, transaction_types: val };
    
    case 'GET_TRANSACTIONS_COUNT':
      return { ...state, transactions_count: val };
    
    case 'SET_TRANSACTIONS_LIMIT':
      return { ...state, transactions_limit: val };
    
    case 'SET_TRANSACTIONS_OFFSET':
      return { ...state, transactions_offset: val };

    case 'SET_TRANSACTIONS_FILTER':
      return { ...state, transactions_filter: val };
    
  }
  return state;
}
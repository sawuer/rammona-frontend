import initialState from './state.js';

export default (state = initialState, { val, type }) => {
  switch (type) {

    case 'GET_TRANSACTIONS':
      return { ...state, transactions: val };

    case 'GET_TRANSACTION_TYPES':
      return { ...state, transaction_types: val };
    
    default:
  }
  return state;
}
import initialState from './state.js';

export default (state = initialState, { val, type }) => {
  switch (type) {

    case 'GET_TRANSACTIONS':
      return { ...state, transactions: val };
    
    default:
  }
  return state;
}
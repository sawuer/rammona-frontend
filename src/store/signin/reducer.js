import initialState from './state.js';

export default (state = initialState, { val, type }) => {
  switch (type) {

    case 'PUT_USER_TOKEN':
      return { ...state, user_token: val }

    case 'PUT_USER_EMAIL':
      return { ...state, user_email: val }

    default:
  }
  return state;
}
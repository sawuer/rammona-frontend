import { createStore, combineReducers } from 'redux';
import signin from './signin/reducer';
import transactions from './transactions/reducer';

const store = createStore(combineReducers({
  signin,
  transactions,
}));

window.store = store;

export default store;
import { createStore, combineReducers } from 'redux';
import signin from './signin/reducer';

const store = createStore(combineReducers({
  signin,
}));

window.store = store;

export default store;
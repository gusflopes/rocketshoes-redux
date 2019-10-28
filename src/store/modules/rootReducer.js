import { combineReducers } from 'redux';

import cart from './cart/reducer';
// Other reducers like user

export default combineReducers({
  cart,
});

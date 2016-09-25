import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';
import counterReducer from './counterReducer';
import timeReducer from './timeReducer';

export default combineReducers({
  auth: authStateReducer,
  counter: counterReducer,
  time: timeReducer
});

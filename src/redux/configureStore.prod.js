import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

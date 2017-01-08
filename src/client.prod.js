import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const initialState = window.REDUX_INITIAL_STATE || {};

const store = configureStore(initialState);

const component = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes(store)}
    </Router>
  </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));

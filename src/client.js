import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const store = configureStore();

const component = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));

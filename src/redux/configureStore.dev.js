import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from 'components/DevTools';
import rootReducer from './reducers';

export default function (initialState = {}) {
  const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }

  return store;
}

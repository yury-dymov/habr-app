import { SIGN_OUT } from 'redux-oauth';
import { TIME_REQUEST_STARTED, TIME_REQUEST_FINISHED, TIME_REQUEST_ERROR } from 'redux/actions/timeActions';

const initialState = {
  time: null,
  errors: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TIME_REQUEST_STARTED:
      return Object.assign({}, state, { loading: true, errors: null });
    case TIME_REQUEST_FINISHED:
      return {
        loading: false,
        errors: null,
        time: action.time
      };
    case TIME_REQUEST_ERROR:
      return Object.assign({}, state, { loading: false, errors: action.errors });
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}

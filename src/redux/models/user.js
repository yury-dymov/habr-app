export function isUserSignedIn(state) {
  return state.auth.getIn(['user', 'isSignedIn']);
}

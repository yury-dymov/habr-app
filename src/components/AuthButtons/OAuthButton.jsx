import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { oAuthSignIn } from 'redux-oauth';
import Button from 'react-bootstrap-button-loader';
import { isUserSignedIn } from 'redux/models/user';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  provider: PropTypes.string.isRequired,
  userSignedIn: PropTypes.bool.isRequired
};

class OAuthButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch, provider } = this.props;

    dispatch(oAuthSignIn({ provider }));
  }

  render() {
    const { loading, provider, userSignedIn } = this.props;

    if (userSignedIn) {
      return null;
    }

    return <Button loading={loading} onClick={this.handleClick}>{provider}</Button>;
  }
}

OAuthButton.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
  const loading = state.auth.getIn(['oAuthSignIn', ownProps.provider, 'loading']) || false;

  return { userSignedIn: isUserSignedIn(state), loading };
}

export default connect(mapStateToProps)(OAuthButton);

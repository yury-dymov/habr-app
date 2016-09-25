import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signOut } from 'redux-oauth';
import Button from 'react-bootstrap-button-loader';
import { isUserSignedIn } from 'redux/models/user';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  userSignedIn: PropTypes.bool.isRequired
};

class SignOutButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch } = this.props;

    dispatch(signOut());
  }

  render() {
    if (!this.props.userSignedIn) {
      return null;
    }

    return <Button onClick={this.handleClick}>Выйти</Button>;
  }
}

SignOutButton.propTypes = propTypes;

function mapStateToProps(state) {
  return { userSignedIn: isUserSignedIn(state) };
}

export default connect(mapStateToProps)(SignOutButton);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { isUserSignedIn } from 'redux/models/user';

import './bootstrap.css';

const propTypes = {
  userSignedIn: PropTypes.bool.isRequired,
  children: PropTypes.node
};

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Hello World</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              {this.props.userSignedIn && (
                <LinkContainer to='/time'>
                  <NavItem>Время</NavItem>
                </LinkContainer>
              )}
              <LinkContainer to='/counters'>
                <NavItem>Счетчики</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return { userSignedIn: isUserSignedIn(state) };
}

export default connect(mapStateToProps)(App);

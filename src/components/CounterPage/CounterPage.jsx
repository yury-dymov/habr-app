import React, { Component } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import StateCounter from './StateCounter';
import ReduxCounter from './ReduxCounter';

class CounterPage extends Component {
  render() {
    return (
      <div>
        <PageHeader>Counters</PageHeader>
        <h3>State Counter</h3>
        <StateCounter />
        <h3>Redux Counter</h3>
        <ReduxCounter />
      </div>
    );
  }
}

export default CounterPage;

import React, { Component } from 'react';
import Counter from './Counter';

class StateCounter extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = { value: 0 };
  }

  handleClick() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return <Counter value={this.state.value} onClick={this.handleClick} />;
  }
}

export default StateCounter;

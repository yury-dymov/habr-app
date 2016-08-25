import React, { PropTypes, Component } from 'react';

import './App.css';

export default class extends Component {
  static propTypes = {
    initialName: PropTypes.string
  }

  static defaultProps = {
    initialName: 'Аноним'
  };

  state = {
    name:            this.props.initialName,
    touched:         false,
    greetingWidget:  () => null
  };

  handleNameChange = (val) => {
    const name = val.target.value;

    this.setState({ touched: true });

    if (name.length === 0) {
      this.setState({ name: this.props.initialName });
    } else {
      this.setState({ name });
    }
  };

  renderGreetingWidget = () => (!this.state.touched ? null :
    <div>
      <hr />
      <p>Здравствуйте, {this.state.name}!</p>
    </div>
  );

  render() {
    return (
      <div className='App'>
        <h1>Hello World!</h1>
        <div>
          <p>Введите Ваше имя:</p>
          <div><input onChange={this.handleNameChange} /></div>
          {this.renderGreetingWidget()}
        </div>
      </div>
    );
  }
}

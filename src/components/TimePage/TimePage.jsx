import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap-button-loader';
import { timeRequest } from 'redux/actions/timeActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  time: PropTypes.any
};

class TimePage extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(timeRequest());
  }

  render() {
    const { loading, time } = this.props;

    return (
      <div>
        <PageHeader>Timestamp</PageHeader>
        <Button loading={loading} onClick={this.handleClick}>Запросить!</Button>
        {time && <div>Time: {time}</div>}
      </div>
    );
  }
}

TimePage.propTypes = propTypes;

function mapStateToProps(state) {
  const { loading, time } = state.time;

  return { loading, time };
}

export default connect(mapStateToProps)(TimePage);

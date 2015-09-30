'use strict';

import { Component } from 'react';

export default class Leagues extends Component {
  render() {
    return (
      <button onClick={this.props.onIncrement}>
        {this.props.value}
      </button>
    );
  }
}
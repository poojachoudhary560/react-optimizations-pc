import React, { Component } from 'react';
import WithoutMemoChild from './WithoutMemoChild';
import WithMemoChild from './WithoutMemoChild';

class Parent extends Component {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval(() => this.setState({ val: 1 }), 3000);
  }

  render() {
    return (
      <>
        <WithoutMemoChild val={this.state.val} />
        <WithMemoChild val={this.state.val} />
      </>
    );
  }
}

export default Parent;

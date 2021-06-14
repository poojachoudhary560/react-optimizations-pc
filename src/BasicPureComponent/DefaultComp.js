import React, { Component } from 'react';
import Child from './Child';

class DefaultComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ value: 1 }), 3000);
  }

  render() {
    // console.log('render default Comp');
    return <Child value={this.state.value} />;
  }
}

export default DefaultComp;

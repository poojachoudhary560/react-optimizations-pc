import React, { Component } from 'react';
import Child from './Child';

class WithShouldCompUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    };
  }

  componenetDidMount() {
    setInterval(() => this.setState({ value: 1 }), 3000);
  }

  shouldComponentUpdate(nextProp, nextState) {
    return this.state.value === nextState.value ? false : true;
  }

  render() {
    console.log('in shouldComponentUpdateComp');
    return <Child value={this.state.value} />;
  }
}

export default WithShouldCompUpdate;

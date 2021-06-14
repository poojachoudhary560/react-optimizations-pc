import React, { PureComponent } from 'react';
import Child from './Child';

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    };
  }

  componenetDidMount() {
    setInterval(() => this.setState({ value: '1' }), 3000);
  }

  render() {
    console.log('in PureComp');
    return <Child value={this.state.value} />;
  }
}

export default PureComp;

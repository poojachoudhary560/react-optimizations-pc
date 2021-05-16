import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '1'
    };
  }

  componenetDidMount() {
    setInterval(() => this.setState({ value: 1 }), 3000);
  }

  render() {
    console.log('in PureComp');
    return <Demo value={this.state.value} />;
  }
}

import React, { Component } from 'react';

class MyErrorBoundary extends Component {
  state = {
    errorMessage: ''
  };

  static getDerivedStateFromError(error) {
    console.log('in getDerivedStateFromError');
    return {
      errorMessage: error.toString()
    };
  }

  componentDidCatch(error, info) {
    console.log('in componentDidCatch');
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;

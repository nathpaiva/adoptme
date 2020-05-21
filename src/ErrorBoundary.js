import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  componentDidUpdate() {
    if(this.state.hasError) {
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 5000);
    }
  }

  render() {
    const { hasError, redirect } = this.state;
    const { children } = this.props;

    if(redirect) {
      return <Redirect to="/" />;
    }

    if(hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here to go back to the home page</Link> or wait five seconds.
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

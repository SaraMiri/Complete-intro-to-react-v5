// mostly code from reactjs.org/docs/error-boundaries.html
import React from "react";
import { Link, Redirect, navigate } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      //Two ways: navigate or redirect

      setTimeout(() => navigate("/"), 5000);
      // setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>to
          back to the home page or wait five seconds.
        </h1>
      );
    }

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

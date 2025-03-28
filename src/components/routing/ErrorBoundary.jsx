/**
 * @file ErrorBoundary.jsx
 * @module ErrorBoundary
 * @desc A React error boundary component that catches JavaScript errors anywhere in its child component tree.
 * - Displays a fallback `SplashScreen` with an error message instead of crashing the whole app.
 * - Logs errors and component file information for debugging.
 * - In production, it hides technical details from users.
 * 
 * @see {@link https://reactjs.org/docs/error-boundaries.html | React Error Boundaries}
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */

import React, { Component } from 'react';
import SplashScreen from './SplashScreen';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorLocation: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }; // Store the error in state
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary:", error, info);

    // Extract file name or component from the stack trace
    const stackLines = info.componentStack.split("\n");
    const fileLine = stackLines.find(line => line.includes("at "));

    // Format it to display relevant file/component information
    const errorLocation = fileLine ? fileLine.trim().replace(/^at\s/, '') : "Unknown location";

    // Update state with the formatted file info
    this.setState({ errorLocation });
  }

  getErrorMessage() {
      
    return this.state.error ? this.state.error.toString() : "An unknown error occurred.";
  }

  render() {
    if (this.state.hasError) {
      const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';

      const errorMsg = isDevelopment ? this.getErrorMessage() : "Something went wrong. Please try again later.";

      return (
        <SplashScreen
          errorMsg
          errorText={errorMsg}
          errorLocation={isDevelopment ? this.state.errorLocation : null} // Only show location in dev
        />
      );
    }

    return this.props.children;
  }
}


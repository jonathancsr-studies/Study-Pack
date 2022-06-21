import React from "react";

class ErrorBoundary extends React.Component<{
    children: React.ReactNode;
  },{
    hasError: boolean;
  }> {
    constructor(props: {
      children: React.ReactNode;
    }) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch() {
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;
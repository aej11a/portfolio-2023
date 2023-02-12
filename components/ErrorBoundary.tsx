import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  global?: boolean;
}

interface State {
  hasError: boolean;
  error?: any;
  errorInfo?: any;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    window.console.error("Client Error: ", error);
    window.console.error("Client Error Info: ", errorInfo);
    this.setState({ hasError: true, error, errorInfo });
  }

  render(): ReactNode {
    // Check if the error is thrown
    if (this.state.hasError) {
      return (
        <div className="flex flex-col align-center justify-center text-center fit">
          <h4 className="text-xl mb-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="underline cursor-pointer" href="/">
              An error occurred. Please click here to reload the page.
            </a>
          </h4>
          <p>{JSON.stringify(this.state.error)}</p>
          <p>{JSON.stringify(this.state.errorInfo)}</p>
        </div>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { useState, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode | any;
  fallback?: ReactNode;
}

function ErrorBoundary(props: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  function handleCatch(_: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", errorInfo);
    setHasError(true);
  }

  if (hasError) {
    return <h1>Une erreur s'est produite.</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          onError: handleCatch,
        })
      )}
    </React.Fragment>
  );
}

export default ErrorBoundary;

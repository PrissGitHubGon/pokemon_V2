import  { ErrorInfo } from 'react';
export type errorBoundaryPropsInterface = {
    children?: React.ReactNode;
    hasError?: boolean;
    error?: Error;
    info?: ErrorInfo

  };
  
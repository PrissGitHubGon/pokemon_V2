import { useEffect, useState } from "react";
import { errorBoundaryPropsInterface } from "../../entities/props-interface/errorBoundaryProps-interface";

const ErrorBoundary: React.FC<errorBoundaryPropsInterface> = ({ children }) => {
  const [hasError] = useState(false);
  useEffect(() => {
    const errorHandler = ({ error, info }: errorBoundaryPropsInterface) => {
      console.log(error, info);
    };
    // @ts-ignore
    window.addEventListener("error", errorHandler);
    // @ts-ignore

    window.addEventListener("unhandledrejection", errorHandler);

    return () => {
      // @ts-ignore

      window.removeEventListener("error", errorHandler);
      // @ts-ignore

      window.removeEventListener("unhandledrejection", errorHandler);
    };
  }, []);

  if (hasError) {
    // Afficher un message d'erreur ou une interface de récupération
    return <h1>Une erreur est survenue.</h1>;
  }

  // Rendre les enfants normalement
  return <>{children}</>;
};
export default ErrorBoundary;

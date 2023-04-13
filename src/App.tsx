/** eslint-disable-file */
import { Route, Routes } from "react-router-dom";
import "./assets/scss/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import ErrorBoundary from "./components/components/ErrorBoundary";

function App() {
  const { createMemoryHistory } = require("history");
  const { Router } = require("react-router-dom");
  const history = createMemoryHistory();
  return (
    <ErrorBoundary>
      <Router location={history.location} navigator={history}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>{" "}
      </Router>
    </ErrorBoundary>
  );
}

export default App;

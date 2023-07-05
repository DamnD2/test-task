import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ImagesContextProvider from "contexts/ImagesContextProvider";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ImagesContextProvider>
      <Router>
        <App />
      </Router>
    </ImagesContextProvider>
  </React.StrictMode>
);

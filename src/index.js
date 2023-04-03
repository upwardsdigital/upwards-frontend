import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

// import { hydrate, render } from "react-dom";

import "aos/dist/aos.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );

// const APP = (
//   <Router>
//     <App />
//   </Router>
// );

// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   hydrate(APP, rootElement);
// } else {
//   render(APP, rootElement);
// }

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  const root = ReactDOM.hydrateRoot(
    document.getElementById("root"),
    <Router>
      <App />
    </Router>
  );
  console.log(root);
} else {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Router>
      <App />
    </Router>
  );
}

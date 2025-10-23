import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // root CSS.
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
// App : its a react component.
// component :

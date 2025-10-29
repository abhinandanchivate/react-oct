import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // root CSS.
import App from "./App.jsx";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { setupListeners } from "./redux/middlewareListner.js";
// in react everything is component.

function BootstrapListener() {
  const navigate = useNavigate();
  useEffect(() => {
    setupListeners(navigate);
  }, [navigate]); // is used to handle the lifecycle events
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      <Router>
        <BootstrapListener />
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
// App : its a react component.
// component :

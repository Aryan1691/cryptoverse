import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./app/Store.js";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>
);

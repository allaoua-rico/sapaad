import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { initialState } from "./context/filterReducer";
import filterReducer from "./context/filterReducer";
import { StateProvider } from "./context/stateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={filterReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

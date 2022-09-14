import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import store from "src/redux/store";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);

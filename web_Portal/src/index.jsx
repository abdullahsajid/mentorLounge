import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <Toaster />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from './Store'

import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <ToastContainer position="top-right" theme="colored" />
  </React.StrictMode>
);

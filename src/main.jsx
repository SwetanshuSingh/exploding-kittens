import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster toastOptions={{ style : {backgroundColor : '#353535', color : 'white', fontSize : '16px'} }} />
      <App />
    </Provider>
  </React.StrictMode>
);

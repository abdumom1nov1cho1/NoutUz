import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ContextProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ContextProvider>
  </BrowserRouter>
);

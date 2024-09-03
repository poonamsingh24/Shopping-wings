import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster, toast } from "sonner";
import { CartContextProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Toaster richColors closeButton />
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

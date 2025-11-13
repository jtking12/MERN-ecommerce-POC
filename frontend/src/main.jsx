import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartProvider.jsx";
import App from "./App.jsx";
import { CurrentUserProvider } from "./context/CurrentUserProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <CurrentUserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CurrentUserProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);

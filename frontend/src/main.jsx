import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./context/CartProvider.jsx";
import App from "./App.jsx";
import { CurrentUserProvider } from "./context/CurrentUserProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentUserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CurrentUserProvider>
  </StrictMode>
);

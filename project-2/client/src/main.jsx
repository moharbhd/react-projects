import React from "react";
import { createRoot } from "react-dom/client";
import "../src/styles.css";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RentContextProvider } from "./RentContext.jsx";

createRoot(document.getElementById("root")).render(
  <RentContextProvider>
    <App />
  </RentContextProvider>
);

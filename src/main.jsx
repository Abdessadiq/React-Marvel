import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// dans les fichier jsx on va Créer du html que babel va transformer en js
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

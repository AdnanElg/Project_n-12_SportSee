// Importation des modules nécessaires :
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";

// Rendu de l'application React dans l'élément "root" en utilisant React Router
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
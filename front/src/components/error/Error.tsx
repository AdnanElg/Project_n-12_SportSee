// Importation des modules :
import notFound from "../../assets/svg/notFound.svg";
import { NavLink } from "react-router-dom";
import "./Error.scss";

// Définition du composant Error :
const Error = () => {
  return (
    <div className="container__error">
      <img src={notFound} alt="image 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">
        <span>Retourner sur la page d'accueil</span>
      </NavLink>
    </div>
  );
};

export default Error;

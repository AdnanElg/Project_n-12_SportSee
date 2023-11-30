// Importation des modules :
import notFound from "../../assets/svg/notFound.svg";
import { NavLink } from "react-router-dom";
import "./Error.scss";

/**
 * Composant de gestion des erreurs 404.
 * Affiche une image 404 avec un message d'erreur et un lien de retour vers la page d'accueil.
 * @namespace
 * @component
 * @author  El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant Error
 */
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

// Exportation du composant Error :
export default Error;

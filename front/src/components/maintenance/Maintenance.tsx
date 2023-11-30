// Importation des module :
import maintenance from "../../assets/img/maintenance.png";
import { NavLink } from "react-router-dom";
import "./Maintenance.scss";

/**
 * Composant affichant une page de maintenance avec une image, un message et un lien de retour à la page d'accueil.
 * @namespace
 * @component
 * @author  El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant Maintenance
 */
const Maintenance = () => {
  return (
    <div className="container__maintenance">
      <img src={maintenance} alt="image maintenance" />
      <p>En cours de maintenance...</p>
      <NavLink to="/">
        <span>Retourner sur la page d'accueil</span>
      </NavLink>
    </div>
  );
};

// Exportation du composant Maintenance :
export default Maintenance;

// Importation des module :
import maintenance from "../../assets/img/maintenance.png";
import { NavLink } from "react-router-dom";
import "./Maintenance.scss";

// Definition du composant Maintenance :
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

export default Maintenance;

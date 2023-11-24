import maintenance from "../../assets/img/maintenance.png";
import { NavLink } from "react-router-dom";
import "./Maintenance.scss";

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

import Logo from "../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <NavLink to="/">
            <li>
              <img src={Logo} alt="logo SportSee" />
            </li>
          </NavLink>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/profile">
            <li>Profil</li>
          </NavLink>
          <NavLink to="/settings">
            <li>Réglages</li>
          </NavLink>
          <NavLink to="/community">
            <li>Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

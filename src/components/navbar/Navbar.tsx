import { useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import close from "../../assets/svg/close.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <header>
      <nav className="navbar">
        <img src={Logo} alt="logo SportSee" />
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
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
        <button onClick={() => setShowMenu(!showMenu)}>
          <img
            src={showMenu ? hamburger : close}
            alt={showMenu ? "open menu" : "close menu"}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

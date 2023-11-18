import { useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import hamburger from "../../assets/svg/hamburger.svg";
import close from "../../assets/svg/close.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

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
        <ul className={showMenu ? "navbar__menu-visible" : "navbar__menu-hidden"}>
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
        <button onClick={handleClick}>
          <img
            src={showMenu ? close : hamburger}
            alt={showMenu ? "close menu" : "open menu"}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

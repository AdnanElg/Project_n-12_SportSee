// Importation des module :
import yoga from "../../assets/svg/yoga.svg";
import swim from "../../assets/svg/swim.svg";
import bike from "../../assets/svg/bike.svg";
import dumbbell from "../../assets/svg/dumbbell.svg";
import "./SideBar.scss";

/**
 * Composant représentant une barre latérale avec des icônes d'activités et une mention de copyright.
 * @component
 * @returns {JSX.Element} Composant SideBar
 */
const SideBar = (): JSX.Element => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <img src={yoga} alt="image yoga" />
        </li>
        <li>
          <img src={swim} alt="image swim" />
        </li>
        <li>
          <img src={bike} alt="image bike" />
        </li>
        <li>
          <img src={dumbbell} alt="image dumbbell" />
        </li>
      </ul>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
};

// Exportation du composant SideBar :
export default SideBar;

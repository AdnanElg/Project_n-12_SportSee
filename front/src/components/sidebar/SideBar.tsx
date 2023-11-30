// Importation des module :
import yoga from "../../assets/svg/yoga.svg";
import swim from "../../assets/svg/swim.svg";
import bike from "../../assets/svg/bike.svg";
import dumbbell from "../../assets/svg/dumbbell.svg";
import "./SideBar.scss";

type ActivitiesType = {
  id: number;
  icon: string;
  alt: string;
}[];

/**
 * Composant représentant une barre latérale avec des icônes d'activités et une mention de copyright.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant SideBar
 */
const SideBar = () => {
  const activities: ActivitiesType = [
    { id: 1, icon: yoga, alt: "image yoga" },
    { id: 2, icon: swim, alt: "image swim" },
    { id: 3, icon: bike, alt: "image bike" },
    { id: 4, icon: dumbbell, alt: "image dumbbell" },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <img src={activity.icon} alt={activity.alt} />
          </li>
        ))}
      </ul>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
};

// Exportation du composant SideBar :
export default SideBar;

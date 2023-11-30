// Importation des module :
import Users from "../../components/users/Users";
import "./Home.scss";

/**
 * Composant représentant la page d'accueil.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant de la page d'accueil.
 */
const Home = () => {
  return (
    <section className="container__home">
      <Users />
    </section>
  );
};

// Exportation de la page Home :
export default Home;

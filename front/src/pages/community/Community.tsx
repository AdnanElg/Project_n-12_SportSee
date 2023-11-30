// Importation des module :
import Maintennace from "../../components/maintenance/Maintenance";
import "./Community.scss";

/**
 * Composant représentant la page de la communauté.
 * @namespace
 * @component
 * @author  El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant de la page de la communauté.
 */
const Community = () => {
  return (
    <main className="container__community">
      <section className="container__community__section">
        <Maintennace />
      </section>
    </main>
  );
};

// Exportation de la page Community :
export default Community;

// Importation des module :
import Error from "../../components/error/Error";
import "./NotFound.scss";

/**
 * Composant représentant la page NotFound (Page non trouvée).
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant de la page NotFound.
 */
const NotFound = (): JSX.Element => {
  return (
    <main className="container__notfound">
      <section className="container__notfound__section">
        <Error />
      </section>
    </main>
  );
};

// Exportation de la page NotFound :
export default NotFound;

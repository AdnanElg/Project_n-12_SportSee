// Importation des module :
import Error from "../../components/error/Error";
import "./NotFound.scss";

/**
 * Composant représentant la page NotFound (Page non trouvée).
 * @component
 * @returns {JSX.Element} Composant de la page NotFound.
 */
const NotFound = () => {
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

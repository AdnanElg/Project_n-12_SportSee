// Importation des module :
import Error from "../../components/error/Error";
import "./NotFound.scss";

// Definition de la page NotFound :
const NotFound = () => {
  return (
    <main className="container__notfound">
      <section className="container__notfound__section">
        <Error />
      </section>
    </main>
  );
};

export default NotFound;

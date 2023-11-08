import Error from "../../components/error/Error";
import "./NotFound.scss";

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

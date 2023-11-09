import "./Home.scss";
import spinner from "../../assets/svg/spinner.svg";
import { UserDataContext } from "../../context/UserDataProvider";
import { useContext } from "react";

const Home = () => {
  const userDataContext = useContext(UserDataContext);
  const { apiState } = userDataContext;
  console.log(apiState.data);

  return (
    <main className="container__home">
      <section className="container__home__section">
        {apiState.loading && <img src={spinner} alt="icône de chargement" />}
        {apiState.error && <p>Une erreur est survenue...</p>}
        {apiState.data?.length > 0}
        {apiState.data?.length === 0 && (
          <p>Votre requête ne correspond à aucune donnée.</p>
        )}
      </section>
    </main>
  );
};

export default Home;

import "./Home.scss";
import spinner from "../../assets/svg/spinner.svg";
import { UserDataContext } from "../../context/UserDataProvider";
import { useContext } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const userDataContext = useContext(UserDataContext);
  const { apiState } = userDataContext;

  return (
    <main className="container__home">
      <section className="container__home__section">
        {apiState.loading && <img src={spinner} alt="icône de chargement" />}
        {apiState.error && <p>Une erreur est survenue...</p>}
        {apiState.data?.USER_DATA_ALL.length > 0 && (
          <>
            <Header
              firstName={
                apiState.data.USER_DATA_ALL[0].USER_MAIN_DATA[0].userInfos
                  .firstName
              }
            />
          </>
        )}
        {apiState.data?.USER_DATA_ALL.length === 0 && (
          <p>Votre requête ne correspond à aucune donnée.</p>
        )}
      </section>
    </main>
  );
};

export default Home;

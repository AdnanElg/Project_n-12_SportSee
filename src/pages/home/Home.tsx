import "./Home.scss";
import { UserDataContext } from "../../context/UserDataProvider";
import { useContext } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const { getUserMainData } = useContext(UserDataContext);

  return (
    <main className="container__home">
      <section className="container__home__section">
        <>
          <Header firstName={getUserMainData().userInfos.firstName} />
        </>
      </section>
    </main>
  );
};

export default Home;

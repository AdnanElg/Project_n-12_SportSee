// Importation des module :
import Users from "../../components/users/Users";
import "./Home.scss";

// Definition de la page Home :
const Home = () => {
  return (
    <section className="container__home">
      <Users />
    </section>
  );
};

export default Home;

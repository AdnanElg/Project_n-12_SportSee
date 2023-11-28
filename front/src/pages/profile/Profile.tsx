// Importation des module :
import Maintenance from "../../components/maintenance/Maintenance";
import "./Profile.scss";

// Definition de la page Profile :
const Profile = () => {
  return (
    <main className="container__profile">
      <section className="container__profile__section">
        <Maintenance />
      </section>
    </main>
  );
};

export default Profile;

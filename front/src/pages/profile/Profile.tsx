// Importation des module :
import Maintenance from "../../components/maintenance/Maintenance";
import "./Profile.scss";

/**
 * Composant représentant la page Profile (Profil utilisateur).
 * @component
 * @returns {JSX.Element} Composant de la page Profile.
 */
const Profile = (): JSX.Element => {
  return (
    <main className="container__profile">
      <section className="container__profile__section">
        <Maintenance />
      </section>
    </main>
  );
};

// Exportation de la page Profile :
export default Profile;

// Importation des module :
import Maintenance from "../../components/maintenance/Maintenance";
import "./Settings.scss";

// Definition de la page Settings :
const Settings = () => {
  return (
    <main className="container__settings">
      <section className="container__settings__section">
        <Maintenance />
      </section>
    </main>
  );
};

export default Settings;

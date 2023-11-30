// Importation des module :
import Maintenance from "../../components/maintenance/Maintenance";
import "./Settings.scss";

/**
 * Composant représentant la page Settings (Paramètres de l'application).
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant de la page Settings.
 */
const Settings = () => {
  return (
    <main className="container__settings">
      <section className="container__settings__section">
        <Maintenance />
      </section>
    </main>
  );
};

// Exportation de la page Settings :
export default Settings;

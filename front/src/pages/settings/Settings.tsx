// Importation des module :
import Maintenance from "../../components/maintenance/Maintenance";
import "./Settings.scss";

/**
 * Composant représentant la page Settings (Paramètres de l'application).
 * @component
 * @returns {JSX.Element} Composant de la page Settings.
 */
const Settings = (): JSX.Element => {
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

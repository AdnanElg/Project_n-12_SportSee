// Importation des modules :
import "./Header.scss";

// Définition des type :
type FirstNameType = {
  firstName: string;
};

/**
 * Composant d'en-tête affichant un message de bienvenue avec un prénom.
 * @component
 * @param {FirstNameType} props - Les propriétés du composant.
 * @returns {JSX.Element} Composant Header
 */
const Header = ({ firstName }: FirstNameType): JSX.Element => {
  return (
    <div className="container__firstname">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

// Exportation du composant Error :
export default Header;

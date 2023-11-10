import "./Header.scss";

type FirstNameType = {
  firstName: string;
};

const Header = ({ firstName }: FirstNameType) => {
  return (
    <div className="container__firstname">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Header;

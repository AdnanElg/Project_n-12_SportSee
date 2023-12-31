// Importation des module :
import { Link } from "react-router-dom";
import profileMen from "../../assets/img/profileMen.png";
import profileWoman from "../../assets/img/profileWoman.png";
import { useState } from "react";
import "./Users.scss";

/**
 * Composant affichant une liste d'utilisateurs avec des liens vers leurs profils individuels.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant Users
 */
const Users = (): JSX.Element => {
  const [dataUser] = useState([
    {
      id: 12,
      picture: profileMen,
      firstName: "Karl",
      lastName: "Dovineau",
    },
    {
      id: 18,
      picture: profileWoman,
      firstName: "Cecilia",
      lastName: "Ratorez",
    },
  ]);

  return (
    <div className="container__users">
      <h1>Veuillez choisir votre utilisateur ?</h1>
      <div className="container__users__link">
        {dataUser.map((item) => {
          return (
            <Link key={item.id} to={`/user/${item.id}`}>
              <div className="container__users__link__userMen">
                <img src={item.picture} />
                <p>
                  {item.firstName} {item.lastName}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// Exportation du composant Users :
export default Users;

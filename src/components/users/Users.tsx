import { Link } from "react-router-dom";
import profileMen from "../../assets/img/profileMen.png";
import profileWoman from "../../assets/img/profileWoman.png";
import { useState } from "react";
import "./Users.scss";

const Users = () => {
  const [dataUser] = useState([
    {
      id: 12,
      picture: profileMen,
      firstName: "Karl",
      lastName: "Ratorez",
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

export default Users;

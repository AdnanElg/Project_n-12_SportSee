import { Link } from "react-router-dom";
import profileMen  from "../../assets/img/profileMen.png";
import profileWoman  from "../../assets/img/profileWoman.png";
import "./Users.scss";

const Users = () => {
    return (
        <div className="container__users">
            <h1>Veuillez choisir votre utilisateur ?</h1>
            <div className="container__users__link">
                <Link to={"/user/12"}>
                    <div className="container__users__link__userMen">
                        <img src={profileMen} />
                        <p>Karl Ratorez</p>
                    </div>
                </Link>
                <Link to={"/user/18"}>
                    <div className="container__users__link__userWomen">
                        <img src={profileWoman} />
                        <p>Cecilia Ratorez</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Users;
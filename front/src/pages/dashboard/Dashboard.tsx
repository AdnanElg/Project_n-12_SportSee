// Importation des modules :
import "./Dashboard.scss";
import spinner from "../../assets/svg/spinner.svg";
import { UserDataContext } from "../../context/UserDataProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import KpiPerformance from "../../components/kpiperformance/KpiPerformance";
import KpiScore from "../../components/kpiscore/KpiScore";
import HealthData from "../../components/healthdata/HealthData";
import WeightChart from "../../components/weightchart/WeightChart";
import KpiObjective from "../../components/kpiobjective/KpiObjective";
import { UserMainDataType } from "../../context/UserDataProvider";

/**
 * Composant représentant la page du tableau de bord de l'utilisateur.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element} Composant du tableau de bord.
 */
const Dashboard = (): JSX.Element => {
  const { id } = useParams();
  const idAsString: string | undefined = id;
  const idAsNumber: number | undefined = Number(idAsString);

  const navigate = useNavigate();

  useEffect(() => {
    if (idAsNumber !== 12 && idAsNumber !== 18) {
      navigate("/404");
    }
  }, [idAsNumber, navigate]);

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserMainDataType | undefined>(undefined);
  const { getUserMainData } = useContext(UserDataContext);

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const userMainData = await getUserMainData(idAsNumber);
        setUser(userMainData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(
          "An error occurred while retrieving data from the server " + error
        );
      }
    };
    getDataUser();
  }, [getUserMainData, idAsNumber]);

  return loading ? (
    <div id="loading">
      <img src={spinner} alt="loader" />
    </div>
  ) : (
    <main className="container__dashboard">
      <section className="container__dashboard__section">
        <>
          <Header firstName={user?.userInfos.firstName ?? ""} />
          <div className="container__dashboard__section__data">
            <div className="container__dashboard__section__data__chart">
              <WeightChart userId={idAsNumber} />
              <div className="container__dashboard__section__data__chart__kpi">
                <KpiObjective userId={idAsNumber} />
                <KpiPerformance userId={idAsNumber} />
                <KpiScore dataScore={user?.todayScore ?? 0} />
              </div>
            </div>
            <div className="container__dashboard__section__data__health">
              <HealthData dataUserMain={user?.keyData ?? Object()} />
            </div>
          </div>
        </>
      </section>
    </main>
  );
};

// Exportation de la page Dashboard :
export default Dashboard;

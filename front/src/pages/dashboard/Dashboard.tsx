// Importation des modules :
import "./Dashboard.scss";
import spinner from "../../assets/svg/spinner.svg";
import { UserDataContext } from "../../context/UserDataProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import WeightChart from "../../components/weightchart/WeightChart";
import KpiObjective from "../../components/kpiobjective/KpiObjective";
import KpiPerformance from "../../components/kpiperformance/KpiPerformance";
import KpiScore from "../../components/kpiscore/KpiScore";
import HealthData from "../../components/healthdata/HealthData";
import UserPerformance from "../../formatters/UserPerformance";
import UserAverageSessions from "../../formatters/UserAverageSessions";
import UserActivity from "../../formatters/UserActivity";

/**
 * Composant représentant la page du tableau de bord de l'utilisateur.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @returns {JSX.Element | null} Composant du tableau de bord.
 */
const Dashboard = () => {
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
  const [dashboardData, setDashboardData] = useState<null | JSX.Element>(null);

  const {
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
  } = useContext(UserDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userMainData = await getUserMainData(idAsNumber);
        const userPerformanceData = await getUserPerformance(idAsNumber);
        const userAverageSessions = await getUserAverageSessions(idAsNumber);
        const userActivity = await getUserActivity(idAsNumber);

        if (userPerformanceData && userAverageSessions && userActivity) {
          const formattedUserPerformance = new UserPerformance(
            userPerformanceData.userId,
            userPerformanceData.kind,
            userPerformanceData.data
          );

          const formattedUserAverageSessions = new UserAverageSessions(
            userAverageSessions.userId,
            userAverageSessions.sessions
          );

          const formattedUserActivity = new UserActivity(
            userActivity.userId,
            userActivity.sessions
          );

          const dataToRender = (
            <main className="container__dashboard">
              <section className="container__dashboard__section">
                <>
                  <Header firstName={userMainData.userInfos.firstName} />
                  <div className="container__dashboard__section__data">
                    <div className="container__dashboard__section__data__chart">
                      <WeightChart
                        dataActivity={formattedUserActivity.getFormattedData()}
                      />
                      <div className="container__dashboard__section__data__chart__kpi">
                        <KpiObjective
                          dataUserAverageSessions={formattedUserAverageSessions.getFormattedData()}
                        />
                        <KpiPerformance
                          dataPerformance={formattedUserPerformance.getFormattedData()}
                        />
                        <KpiScore dataScore={userMainData.todayScore} />
                      </div>
                    </div>
                    <div className="container__dashboard__section__data__health">
                      <HealthData dataUserMain={userMainData.keyData} />
                    </div>
                  </div>
                </>
              </section>
            </main>
          );
          setDashboardData(dataToRender);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        throw new Error(
          "An error occurred while retrieving data from the server " + error
        );
      }
    };
    fetchData();
  }, [
    getUserMainData,
    getUserPerformance,
    getUserAverageSessions,
    getUserActivity,
    idAsNumber,
  ]);

  return loading ? (
    <div id="loading">
      <img src={spinner} alt="loader" />
    </div>
  ) : (
    dashboardData
  );
};

// Exportation de la page Dashboard :
export default Dashboard;

import "./Dashboard.scss";
import { UserDataContext } from "../../context/UserDataProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../../components/header/Header";
import WeightChart from "../../components/weightchart/WeightChart";
import KpiObjective from "../../components/kpiobjective/KpiObjective";
import KpiPerformance from "../../components/kpiperformance/KpiPerformance";
import KpiScore from "../../components/kpiscore/KpiScore";
import HealthData from "../../components/healthdata/HealthData";
import UserPerformance from "../../formatters/UserPerformance";
import UserAverageSessions from "../../formatters/UserAverageSessions";
import UserActivity from "../../formatters/UserActivity";

const Dashboard = () => {
  const { id } = useParams();
  const idAsString: string | undefined = id;
  const idAsNumber: number | undefined = Number(idAsString);

  const navigate = useNavigate();

  useEffect(() => {
    if (idAsNumber !== 12 && idAsNumber !== 18) {
      navigate("/404");
    }
  }, []);

  const {
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
  } = useContext(UserDataContext);

  try {
    const userPerformanceData = getUserPerformance(idAsNumber);
    const userAverageSessions = getUserAverageSessions(idAsNumber);
    const userActivity = getUserActivity(idAsNumber);

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

      return (
        <main className="container__dashboard">
          <section className="container__dashboard__section">
            <>
              <Header
                firstName={getUserMainData(idAsNumber).userInfos.firstName}
              />
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
                    <KpiScore
                      dataScore={getUserMainData(idAsNumber).todayScore}
                    />
                  </div>
                </div>
                <div className="container__dashboard__section__data__health">
                  <HealthData
                    dataUserMain={getUserMainData(idAsNumber).keyData}
                  />
                </div>
              </div>
            </>
          </section>
        </main>
      );
    }
  } catch (e) {
    console.log(
      `Invalid ID parameter: ${idAsNumber}. Please provide a valid user ID.`,
      e
    );
  }
};

export default Dashboard;

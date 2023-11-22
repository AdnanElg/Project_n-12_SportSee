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

const Dashboard = () => {
  const { id } = useParams();
  const idAsString: string | undefined = id;
  const idAsNumber: number | undefined = Number(idAsString);

  //! Probléme lorsque je change d'id de l'utilisateur en paramétre je veux que sa renvoit vers ma page 404 :
  const navigate = useNavigate();

  useEffect(() => {
    if (idAsNumber !== 12 && idAsNumber !== 18) {
      navigate("/404");
    } else {
      console.log("ok");
    }
  }, []);

  const {
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
  } = useContext(UserDataContext);

  return (
    <main className="container__dashboard">
      <section className="container__dashboard__section">
        <>
          <Header firstName={getUserMainData(idAsNumber).userInfos.firstName} />
          <div className="container__dashboard__section__data">
            <div className="container__dashboard__section__data__chart">
              <WeightChart
                dataActivity={getUserActivity(idAsNumber).sessions}
              />
              <div className="container__dashboard__section__data__chart__kpi">
                <KpiObjective
                  dataUserAverageSessions={
                    getUserAverageSessions(idAsNumber).sessions
                  }
                />
                <KpiPerformance
                  dataPerformance={getUserPerformance(idAsNumber).data}
                />
                <KpiScore dataScore={getUserMainData(idAsNumber).todayScore} />
              </div>
            </div>
            <div className="container__dashboard__section__data__health">
              <HealthData dataUserMain={getUserMainData(idAsNumber).keyData} />
            </div>
          </div>
        </>
      </section>
    </main>
  );
};

export default Dashboard;

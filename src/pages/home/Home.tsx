import "./Home.scss";
import { UserDataContext } from "../../context/UserDataProvider";
import { useContext } from "react";
import Header from "../../components/header/Header";
import WeightChart from "../../components/weightchart/WeightChart";
import KpiObjective from "../../components/kpiobjective/KpiObjective";
import KpiPerformance from "../../components/kpiperformance/KpiPerformance";
import KpiScore from "../../components/kpiscore/KpiScore";
import HealthData from "../../components/healthdata/HealthData";

const Home = () => {
  const { getUserMainData, getUserActivity } = useContext(UserDataContext);

  return (
    <main className="container__home">
      <section className="container__home__section">
        <>
          <Header firstName={getUserMainData().userInfos.firstName} />
          <div className="container__home__section__data">
            <div className="container__home__section__data__chart">
              <WeightChart dataActivity={getUserActivity().sessions} />
              <div className="container__home__section__data__chart__kpi">
                <KpiObjective />
                <KpiPerformance />
                <KpiScore />
              </div>
            </div>
            <div className="container__home__section__data__health">
              <HealthData dataUserMain={getUserMainData().keyData} />
            </div>
          </div>
        </>
      </section>
    </main>
  );
};

export default Home;

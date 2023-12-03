// Importation des module :
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserDataProvider";
import UserPerformance from "../../formatters/UserPerformance";
import "./KpiPerformance.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

// Definition du type :
type DataPerformanceType = {
  value: number;
  kind: string;
}[];

/**
 * Composant affichant un graphique de performance sous forme de radar.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @see {@link https://recharts.org/en-US/examples/SimpleRadarChart} pour plus d'informations sur l'élément `RadarChart` de l'API recharts
 * @param {object} props - Les propriétés du composant.
 * @param {DataPerformanceType} props.dataPerformance - Les données de performance.
 * @returns {JSX.Element} Composant KpiPerformance
 */
const KpiPerformance = ({ userId }: { userId: number }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [userPerformance, setUserPerformance] = useState<
    DataPerformanceType | undefined
  >(undefined);
  const { getUserPerformance } = useContext(UserDataContext);

  useEffect(() => {
    const getDataPerformance = async () => {
      const userPerformanceData = await getUserPerformance(userId);

      const formattedUserPerformance = new UserPerformance(
        userPerformanceData.userId,
        userPerformanceData.kind,
        userPerformanceData.data
      );

      setUserPerformance(formattedUserPerformance.getFormattedData());
      setIsLoading(false);
    };

    getDataPerformance();
  }, []);

  return (
    <div className="container__kpiperformance">
      {!isLoading && (
        <ResponsiveContainer minWidth={230} minHeight={250}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={userPerformance}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{ fontSize: 12, fill: "white", fontWeight: "bold", dy: 3 }}
            />
            <Radar dataKey="value" fillOpacity={0.6} fill="#BF0F0E" />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// Exportation du composant KpiPerformance :
export default KpiPerformance;

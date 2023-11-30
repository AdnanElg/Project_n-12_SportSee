// Importation des module :
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
 * @namespace
 * @component
 * @author  El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @param {object} props - Les propriétés du composant.
 * @param {DataPerformanceType} props.dataPerformance - Les données de performance.
 * @returns {JSX.Element} Composant KpiPerformance
 */
const KpiPerformance = ({
  dataPerformance,
}: {
  dataPerformance: DataPerformanceType;
}) => {
  return (
    <div className="container__kpiperformance">
      <ResponsiveContainer minWidth={230} minHeight={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={dataPerformance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: 12, fill: "white", fontWeight: "bold", dy: 3 }}
          />
          <Radar dataKey="value" fillOpacity={0.6} fill="#BF0F0E" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Exportation du composant KpiPerformance :
export default KpiPerformance;

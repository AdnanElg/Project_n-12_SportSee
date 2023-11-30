// Importation des module :
import "./WeightChart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Definition des type :
type UserActivityType = {
  day: number;
  kilogram: number;
  calories: number;
}[];

type PayloadType = {
  chartType: undefined;
  color: string;
  dataKey: string;
  fill: string;
  formatter: undefined;
  name: string;
  opacity: number;
  payload: { day: number; sessionLength: number };
  stroke: string;
  strokeWidth: number;
  type: undefined;
  unit: undefined;
  value: number;
}[];

/**
 * Composant affichant un graphique en barres représentant l'activité quotidienne avec le poids et les calories brûlées.
 * @namespace
 * @component
 * @author  El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @param {object} props - Les propriétés du composant.
 * @param {UserActivityType} props.dataActivity - Les données d'activité utilisateur.
 * @returns {JSX.Element} Composant WeightChart
 */
const WeightChart = ({ dataActivity }: { dataActivity: UserActivityType }) => {
  const CustomToolTip = ({
    active,
    payload,
  }: {
    active: boolean;
    payload: PayloadType;
  }) => {
    if (active) {
      return (
        <div className="container__weightcart__tooltip">
          <p>{`${payload[0].value}`}kg</p>
          <p>{`${payload[1].value}`}kcal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container__weightcart">
      <div className="container__weightcart__legend">
        <h3>Activité quotidienne</h3>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <BarChart data={dataActivity}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={10}
            tickLine={false}
            tick={{ fontWeight: "bold", color: "#9B9EAC" }}
          />
          <YAxis
            domain={["dataMin-3", "dataMax+3"]}
            tickCount={4}
            dataKey="kilogram"
            yAxisId="kilogram"
            tickMargin={10}
            orientation="right"
            tickLine={false}
            tick={{ fontWeight: "bold", color: "#9B9EAC" }}
          />
          <YAxis
            hide
            dataKey="calories"
            yAxisId="calories"
            orientation="right"
            domain={[0, "dataMax+5"]}
          />
          <Tooltip content={<CustomToolTip active={false} payload={[]} />} />
          <Bar
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Exportation du composant WeightChart :
export default WeightChart;

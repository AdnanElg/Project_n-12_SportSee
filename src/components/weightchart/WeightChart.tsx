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
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={dataActivity}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={10}
            tickLine={false}
            tick={{ fontWeight: "bold", color: "#9B9EAC" }}
          />
          <YAxis
            dataKey="kilogram"
            domain={["dataMin-1", "dataMax+2"]}
            tickMargin={10}
            orientation="right"
            tickLine={false}
            tick={{ fontWeight: "bold", color: "#9B9EAC" }}
          />
          <Tooltip content={<CustomToolTip active={false} payload={[]} />} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[20, 20, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;

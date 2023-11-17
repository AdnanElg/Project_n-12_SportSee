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
    day: string;
    kilogram: number;
    calories: number;
}[];

const WeightChart = ({ dataActivity }: { dataActivity: UserActivityType }) => {
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
            tickLine={false}
            tick={{ fontWeight: "bold", color: "#9B9EAC" }}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            tick={{ fontWeight: "bold", color: "#9B9EAC" }}
          />
          <Tooltip
            labelStyle={{ display: "none" }}
            itemStyle={{
              fontSize: "12px",
              color: "#fff",
              fontWeight: 600,
            }}
            contentStyle={{
              background: "red",
              border: "none",
            }}
          />
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

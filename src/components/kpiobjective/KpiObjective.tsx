import "./KpiObjective.scss";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis
} from "recharts";


type DataUserAverageSessionsType = {
  day: number;
  sessionLength: number;
}[];


const KpiObjective = ({dataUserAverageSessions}: {dataUserAverageSessions: DataUserAverageSessionsType}) => {
  return (
    <div className="container__kpiobjective">
      <h2 className="container__kpiobjective__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" minHeight={250} >
        <LineChart data={dataUserAverageSessions} margin={{ top: 60, right: 15, left: 15, bottom: 40 }}>
          <XAxis axisLine={false} tickLine={false} dataKey="day" tick={{ fill: '#fff', fontWeight: "bold", fontSize: "12px",  dy: 30}} interval={0}/>
          <Tooltip
            labelStyle={{ display: "none" }}
            itemStyle={{
              fontSize: "12px",
              color: "#000",
              fontWeight: 600,
            }}
            contentStyle={{
              background: "#fff",
              border: "none"
            }}
            cursor={false}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            opacity={0.8}
            strokeWidth={2.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiObjective;



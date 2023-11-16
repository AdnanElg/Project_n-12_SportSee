import "./KpiObjective.scss";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis
} from "recharts";


const dataUserAverageSessions = [
  {
    day: "L",
    sessionLength: 30,
  },
  {
    day: "M",
    sessionLength: 23,
  },
  {
    day: "M",
    sessionLength: 45,
  },
  {
    day: "J",
    sessionLength: 50,
  },
  {
    day: "V",
    sessionLength: 0,
  },
  {
    day: "S",
    sessionLength: 0,
  },
  {
    day: "D",
    sessionLength: 60,
  },
];


const KpiObjective = () => {
  return (
    <div className="container__kpiobjective">
      <h2 className="container__kpiobjective__title">Durée moyenne des <br/> sessions</h2>
      <ResponsiveContainer minWidth={230} minHeight={250} >
        <LineChart data={dataUserAverageSessions} margin={{ top: 60, bottom: 40}}>
          <XAxis axisLine={false} tickLine={false} dataKey="day" tick={{ fill: '#fff', fontWeight: "bold", fontSize: "12px", dy: 30}} interval={0} />
          <Tooltip
          //  {<CustomTooltip />} 
            labelStyle={{ display: "none" }}
            itemStyle={{
              fontSize: "12px",
              color: "#000",
              fontWeight: 600,
            }}
            contentStyle={{
              background: "#fff",
              border: "none",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
            cursor={false}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={2.5} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiObjective;



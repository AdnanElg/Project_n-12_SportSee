import "./KpiObjective.scss";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis
} from "recharts";


const KpiObjective = ({dataUserAverageSessions}) => {
  return (
    <div className="container__kpiobjective">
      <ResponsiveContainer minWidth={250} minHeight={280}>
        <LineChart width={200} height={150} data={dataUserAverageSessions}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"  
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiObjective;

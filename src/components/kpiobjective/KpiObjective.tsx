import "./KpiObjective.scss";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis
} from "recharts";

// Revoir graphique + passer les valeur correctement dans les data et mettre jours de la semaine a la place des index passer :
const KpiObjective = ({dataUserAverageSessions}) => {
  return (
    <div className="container__kpiobjective">
      <ResponsiveContainer minWidth={230} minHeight={250}>
        <LineChart width={200} height={150} data={dataUserAverageSessions} >
          <XAxis dataKey="day"/>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiObjective;

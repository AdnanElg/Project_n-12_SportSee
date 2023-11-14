import "./KpiPerformance.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// Mettre les data avec les vraix value en props et revoir espacement des valeur :
const data = [
  {
    subject: 'intensité',
    value: 90,
  },
  {
    subject: 'vitesse',
    value: 200,
  },
  {
    subject: 'force',
    value: 50,
  },
  {
    subject: 'endurance',
    value: 140,
  },
  {
    subject: 'énergie',
    value: 120,
  },
  {
    subject: 'cardio',
    value: 80,
  },
];


const KpiPerformance = () => {
  return (
    <div className="container__kpiperformance">
       <ResponsiveContainer minWidth={230} minHeight={250}>
        <RadarChart  cx="50%" cy="50%" outerRadius="70%" data={data} >
          <PolarGrid  radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "white", fontWeight: "bold"}} dy={3} />
          <Radar dataKey="value" fillOpacity={0.6} fill="#BF0F0E"/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiPerformance;





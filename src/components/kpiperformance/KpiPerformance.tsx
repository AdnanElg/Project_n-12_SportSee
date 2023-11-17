import "./KpiPerformance.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

type KpiPerformanceType = {
  value: number;
  kind: number;
}[];

const KpiPerformance = ({dataPerformance}:{dataPerformance: KpiPerformanceType}) => {
  return (
    <div className="container__kpiperformance">
       <ResponsiveContainer minWidth={230} minHeight={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={dataPerformance} >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: "white", fontWeight: "bold", dy: 3 }} />
          <Radar dataKey="value" fillOpacity={0.6} fill="#BF0F0E"/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KpiPerformance;





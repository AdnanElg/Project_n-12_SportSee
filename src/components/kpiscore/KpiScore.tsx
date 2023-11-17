import { PieChart, Pie} from 'recharts';
import { useState } from "react";
import "./KpiScore.scss";

type DataType = {
  todayScore : number
}[];

const KpiScore = ({dataScore}:{dataScore: number}) => {
  const [score] = useState(dataScore * 100);
  const [data] = useState<DataType>([
    {todayScore : score}
  ])
  
  
  return (
    <div className="container__kpiscore">
      <h2 className="container__kpiscore__title">Score</h2>
      <p className="container__kpiscore__score">{score}% <br/><span>de votre <br/> objectif</span></p>
      <PieChart width={230} height={250}>
        <Pie
          data={data}
          cx={105}
          cy={140}
          innerRadius={85}
          outerRadius={100}
          paddingAngle={150}
          dataKey="todayScore"
          cornerRadius={10} 
          fill='#FF0101'
        >
        </Pie>
      </PieChart>
    </div>
  );
};

export default KpiScore;

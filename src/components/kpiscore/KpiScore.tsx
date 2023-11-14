import { PieChart, Pie, Cell } from 'recharts';
import "./KpiScore.scss";

// Rajouter les vraix data et revoir comment arrpondir les bord de la barre de progression + mettre aux centre la valeur de votre objectif
const data = [
  { name: 'score', todayScore: 200 }
];

const KpiScore = () => {
  return (
    <div className="container__kpiscore">
      <PieChart width={230} height={250}>
        <Pie
          data={data}
          cx={110}
          cy={110}
          innerRadius={85}
          outerRadius={100}
          paddingAngle={150}
          dataKey="todayScore"
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill='#FF0101'/>
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default KpiScore;

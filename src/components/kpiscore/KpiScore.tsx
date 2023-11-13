import { PieChart, Pie, Cell } from 'recharts';
import "./KpiScore.scss";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const KpiScore = () => {
  return (
    <div className="container__kpiscore" style={{ minWidth: 150, minHeight: 200 }}>
      <PieChart width={280} height={280}>
        <Pie
          data={data}
          cx={135}
          cy={140}
          innerRadius={80}
          outerRadius={100}
          fill="#82ca9d"  
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default KpiScore;

import { PieChart, Pie } from "recharts";
import "./KpiScore.scss";

const KpiScore = ({ dataScore }: { dataScore: number }) => {
  const score = dataScore * 100;
  const data = [{ name: "todayScore", value: score }];

  return (
    <div className="container__kpiscore">
      <h2 className="container__kpiscore__title">Score</h2>
      <p className="container__kpiscore__score">
        {score}% <br />
        <span>
          de votre <br /> objectif
        </span>
      </p>
      <PieChart width={230} height={250}>
        <Pie
          data={data}
          cx={110}
          cy={140}
          innerRadius={85}
          outerRadius={100}
          paddingAngle={150}
          dataKey="value"
          cornerRadius={10}
          fill="#FF0101"
          startAngle={80}
          endAngle={160}
        ></Pie>
      </PieChart>
    </div>
  );
};

export default KpiScore;

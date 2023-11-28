import { PieChart, Pie, Cell } from "recharts";
import "./KpiScore.scss";

const KpiScore = ({ dataScore }: { dataScore: number }) => {
  const data = [
    { name: "score", value: dataScore },
    { name: "total", value: 1 - dataScore },
  ];
  return (
    <div className="container__kpiscore">
      <h2 className="container__kpiscore__title">Score</h2>
      <p className="container__kpiscore__score">
        {dataScore * 100}% <br />
        <span>
          de votre <br /> objectif
        </span>
      </p>
      <PieChart width={280} height={250}>
        <Pie
          cy={133}
          data={data}
          startAngle={90}
          endAngle={450}
          innerRadius={88}
          outerRadius={100}
          cornerRadius={10}
          dataKey="value"
        >
          <Cell fill={"#e60000"} />
          <Cell fill={"transparent"} stroke={"transparent"} />
        </Pie>
        <Pie
          cy={133}
          outerRadius={85}
          fill={"#FFFFFF"}
          data={[{ name: "background", value: 100 }]}
          dataKey="value"
        />
      </PieChart>
    </div>
  );
};

export default KpiScore;
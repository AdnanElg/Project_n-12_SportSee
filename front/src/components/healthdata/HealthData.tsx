// Importation des module :
import calories from "../../assets/svg/calories.svg";
import proteines from "../../assets/svg/proteines.svg";
import glucides from "../../assets/svg/glucides.svg";
import lipides from "../../assets/svg/lipides.svg";
import { useState } from "react";
import "./HealthData.scss";

// Definition des type :
type DataUserMainType = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

type HealthDataConfigType = {
  id: number;
  content: string;
  text: string;
  value: string;
}[];

/**
 * Composant affichant les données de santé de l'utilisateur, telles que les calories, les protéines, les glucides et les lipides.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @param {object} props - Les propriétés du composant.
 * @param {DataUserMainType} props.dataUserMain - Les données principales de l'utilisateur.
 * @returns {JSX.Element} Composant HealthData
 */
const HealthData = ({
  dataUserMain,
}: {
  dataUserMain: DataUserMainType;
}): JSX.Element => {
  const keyData = dataUserMain;

  const [healthData] = useState<HealthDataConfigType>([
    {
      id: 1,
      content: calories,
      text: "Calories",
      value: `${keyData.calorieCount} kCal`,
    },
    {
      id: 2,
      content: proteines,
      text: "Proteines",
      value: `${keyData.proteinCount} g`,
    },
    {
      id: 3,
      content: glucides,
      text: "Glucides",
      value: `${keyData.carbohydrateCount} g`,
    },
    {
      id: 4,
      content: lipides,
      text: "Lipides",
      value: `${keyData.lipidCount} g`,
    },
  ]);

  return (
    <div className="container__healthdata">
      {healthData.map((item) => (
        <div key={item.id} className="container__healthdata__icôns">
          <img src={item.content} alt={`icône ${item.text}`} />
          <div className="container__healthdata__icôns__content">
            <span>{item.value}</span>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Exportation du composant HealthData :
export default HealthData;

// Importation des module :
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserDataProvider";
import UserAverageSessions from "../../formatters/UserAverageSessions";
import "./KpiObjective.scss";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from "recharts";

// Definition des type :
type DataUserAverageSessionsType = {
  day: string;
  sessionLength: number;
}[];

type PayloadType = {
  value: number;
}[];

type Points = { x: number; y: number }[];

/**
 * Composant affichant un graphique de la durée moyenne des sessions utilisateur.
 * @component
 * @author El Ghalbzouri-Adnan <elghalbzouriadnan@gmail.com>
 * @see {@link https://recharts.org/en-US/examples/CustomizedLabelLineChart} pour plus d'informations sur l'élément `LineChart` de l'API recharts
 * @param {object} props - Les propriétés du composant.
 * @param {DataUserAverageSessionsType} props.dataUserAverageSessions - Les données de durée moyenne des sessions utilisateur.
 * @returns {JSX.Element} Composant KpiObjective
 */
const KpiObjective = ({ userId }: { userId: number }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [userAverageSessions, setUserAverageSessions] = useState<
    DataUserAverageSessionsType | undefined
  >(undefined);
  const { getUserAverageSessions } = useContext(UserDataContext);

  useEffect(() => {
    const getDataAverageSessions = async () => {
      const userAverageSessions = await getUserAverageSessions(userId);

      const formattedUserAverageSessions = new UserAverageSessions(
        userAverageSessions.userId,
        userAverageSessions.sessions
      );

      setUserAverageSessions(formattedUserAverageSessions.getFormattedData());
      setIsLoading(false);
    };

    getDataAverageSessions();
  }, [getUserAverageSessions, userId]);

  const CustomToolTip = ({
    active,
    payload,
  }: {
    active: boolean;
    payload: PayloadType;
  }) => {
    if (active) {
      return (
        <div className="container__kpiobjective__tooltip">
          <p>{`${payload[0].value}`} min</p>
        </div>
      );
    }
    return null;
  };

  const CustomHover = ({ points }: { points: Points }) => {
    return (
      <rect
        x={points[0].x}
        y={0}
        height="100%"
        width="100%"
        fill="rgba(0, 0, 0, 0.1)"
      />
    );
  };

  return (
    <div className="container__kpiobjective">
      <h2 className="container__kpiobjective__title">
        Durée moyenne des sessions
      </h2>
      {!isLoading && (
        <ResponsiveContainer width="100%" minHeight={250}>
          <LineChart
            data={userAverageSessions}
            margin={{ top: 60, right: 15, left: 15, bottom: 40 }}
          >
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="day"
              tick={{
                fill: "#fff",
                fontWeight: "bold",
                fontSize: "12px",
                dy: 30,
              }}
              interval={0}
            />
            <Tooltip
              content={<CustomToolTip active={false} payload={[]} />}
              cursor={<CustomHover points={[]} />}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="sessionLength"
              stroke="#ffffff"
              opacity={0.8}
              strokeWidth={2.5}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// Exportation du composant KpiObjective :
export default KpiObjective;

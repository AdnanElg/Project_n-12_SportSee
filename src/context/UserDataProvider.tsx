import { createContext } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/MockUp.tsx";
import { useNavigate } from "react-router-dom";

type UserMainDataType = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}[];

type UserActivityType = {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}[];

type UserAverageSessionsType = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
}[];

type UserPerformanceType = {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: {
    value: number;
    kind: number;
  }[];
}[];

type UserDataType = {
  getUserMainData: (id: number) => UserMainDataType[0] | UserMainDataType[1];
  getUserActivity: (
    userId: number
  ) => UserActivityType[0] | UserActivityType[1];
  getUserAverageSessions: (
    userId: number
  ) => UserAverageSessionsType[0] | UserAverageSessionsType[1];
  getUserPerformance: (
    userId: number
  ) => UserPerformanceType[0] | UserPerformanceType[1];
};

type UserDataProviderProps = {
  children: React.ReactNode;
};

export const UserDataContext = createContext<UserDataType>({} as UserDataType);

const UserDataProvider = (props: UserDataProviderProps) => {
  try {
    return (
      <UserDataContext.Provider
        value={{
          getUserMainData: (id) => {
            const userMainData = USER_MAIN_DATA.find(
              (userDataId) => userDataId.id === id
            );

            //! Probléme pour gestion id et redirection page 404 :
            if (id !== 12 && id !== 18) {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const navigate = useNavigate();
              navigate("/404");
            }

            if (!userMainData) {
              throw new Error(
                `User with ID ${id} not found in USER_MAIN_DATA.`
              );
            }

            return userMainData;
          },

          getUserActivity: (userId) => {
            const userActivity = USER_ACTIVITY.find(
              (userDataId) => userDataId.userId === userId
            );

            if (!userActivity) {
              throw new Error(
                `User with ID ${userId} not found in USER_ACTIVITY.`
              );
            }
            return userActivity;
          },

          getUserAverageSessions: (userId) => {
            const userAverageSessions = USER_AVERAGE_SESSIONS.find(
              (userDataId) => userDataId.userId === userId
            );

            if (!userAverageSessions) {
              throw new Error(
                `User with ID ${userId} not found in USER_AVERAGE_SESSIONS.`
              );
            }
            return userAverageSessions;
          },

          getUserPerformance: (userId) => {
            const userPerformance = USER_PERFORMANCE.find(
              (userDataId) => userDataId.userId === userId
            );

            if (!userPerformance) {
              throw new Error(
                `User with ID ${userId} not found in USER_PERFORMANCE.`
              );
            }
            return userPerformance;
          },
        }}
      >
        {props.children}
      </UserDataContext.Provider>
    );
  } catch (error) {
    throw new Error(`Error creating UserDataContext: ${error}`);
  }
};

export default UserDataProvider;

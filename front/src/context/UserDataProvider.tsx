// Importation modules :
import axios from "axios";
import { createContext } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/MockUp.tsx";

// Définition des Type :
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
};

type UserActivityType = {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
};

type UserAverageSessionsType = {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
};

type UserPerformanceType = {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: {
    value: number;
    kind: number;
  }[];
};

type UserDataType = {
  getUserMainData: (id: number) => UserMainDataType | Promise<UserMainDataType>;
  getUserActivity: (
    userId: number
  ) => UserActivityType | Promise<UserActivityType>;
  getUserAverageSessions: (
    userId: number
  ) => UserAverageSessionsType | Promise<UserAverageSessionsType>;
  getUserPerformance: (
    userId: number
  ) => UserPerformanceType | Promise<UserPerformanceType>;
};

type UserDataProviderProps = {
  children: React.ReactNode;
};

export const UserDataContext = createContext<UserDataType>({} as UserDataType);

const useMock: string = import.meta.env.VITE_USE_MOCK;

// Definition du context UserDataProvider :
const UserDataProvider = (props: UserDataProviderProps) => {
  try {
    return (
      <UserDataContext.Provider
        value={{
          getUserMainData: async (id) => {
            if (useMock === "true") {
              const userMainData = USER_MAIN_DATA.find(
                (userDataId) => userDataId.id === id
              );
              if (!userMainData) {
                throw new Error(
                  `User with ID ${id} not found in USER_MAIN_DATA.`
                );
              }
              return userMainData;
            } else {
              try {
                if (id !== 12 && id !== 18) {
                  throw new Error(
                    `User with ID ${id} not found in USER_MAIN_DATA.`
                  );
                }
                const response = await axios.get(
                  `http://localhost:3000/user/${id}`
                );
                return response.data.data;
              } catch (error) {
                throw new Error(`Error fetching user data: ${error}`);
              }
            }
          },

          getUserActivity: async (userId) => {
            if (useMock === "true") {
              const userActivity = USER_ACTIVITY.find(
                (userDataId) => userDataId.userId === userId
              );
              if (!userActivity) {
                throw new Error(
                  `User with ID ${userId} not found in USER_ACTIVITY.`
                );
              }
              return userActivity;
            } else {
              try {
                if (userId !== 12 && userId !== 18) {
                  throw new Error(
                    `User with ID ${userId} not found in USER_ACTIVITY.`
                  );
                }
                const response = await axios.get(
                  `http://localhost:3000/user/${userId}/activity`
                );
                return response.data.data;
              } catch (error) {
                throw new Error(`Error fetching user data: ${error}`);
              }
            }
          },

          getUserAverageSessions: async (userId) => {
            if (useMock === "true") {
              const userAverageSessions = USER_AVERAGE_SESSIONS.find(
                (userDataId) => userDataId.userId === userId
              );
              if (!userAverageSessions) {
                throw new Error(
                  `User with ID ${userId} not found in USER_AVERAGE_SESSIONS.`
                );
              }
              return userAverageSessions;
            } else {
              try {
                if (userId !== 12 && userId !== 18) {
                  throw new Error(
                    `User with ID ${userId} not found in USER_AVERAGE_SESSIONS.`
                  );
                }
                const response = await axios.get(
                  `http://localhost:3000/user/${userId}/average-sessions`
                );
                return response.data.data;
              } catch (error) {
                throw new Error(`Error fetching user data: ${error}`);
              }
            }
          },

          getUserPerformance: async (userId) => {
            if (useMock === "true") {
              const userPerformance = USER_PERFORMANCE.find(
                (userDataId) => userDataId.userId === userId
              );
              if (!userPerformance) {
                throw new Error(
                  `User with ID ${userId} not found in USER_PERFORMANCE.`
                );
              }
              return userPerformance;
            } else {
              try {
                if (userId !== 12 && userId !== 18) {
                  throw new Error(
                    `User with ID ${userId} not found in USER_PERFORMANCE.`
                  );
                }
                const response = await axios.get(
                  `http://localhost:3000/user/${userId}/performance`
                );
                return response.data.data;
              } catch (error) {
                throw new Error(`Error fetching user data: ${error}`);
              }
            }
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

import React, { createContext } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/MockUp.tsx";

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
  getUserMainData: () => UserMainDataType[0];
  getUserActivity: () => UserActivityType[0];
  getUserAverageSessions: () => UserAverageSessionsType[0];
  getUserPerformance: () => UserPerformanceType[0];
};

type UserDataProviderProps = {
  children: React.ReactNode;
};

export const UserDataContext = createContext<UserDataType>({} as UserDataType);

const UserDataProvider = (props: UserDataProviderProps) => {
  try {
    if (!USER_MAIN_DATA || USER_MAIN_DATA.length === 0) {
      throw new Error(
        "Error in UserDataContext: USER_MAIN_DATA is empty or has an unexpected format."
      );
    }

    if (!USER_ACTIVITY || USER_ACTIVITY.length === 0) {
      throw new Error(
        "Error in UserDataContext: USER_ACTIVITY is empty or has an unexpected format."
      );
    }

    if (!USER_AVERAGE_SESSIONS || USER_AVERAGE_SESSIONS.length === 0) {
      throw new Error(
        "Error in UserDataContext: USER_AVERAGE_SESSIONS is empty or has an unexpected format."
      );
    }

    if (!USER_PERFORMANCE || USER_PERFORMANCE.length === 0) {
      throw new Error(
        "Error in UserDataContext: USER_PERFORMANCE is empty or has an unexpected format."
      );
    }
    return (
      <UserDataContext.Provider
        value={{
          getUserMainData: () => USER_MAIN_DATA[0],
          getUserActivity: () => USER_ACTIVITY[0],
          getUserAverageSessions: () => USER_AVERAGE_SESSIONS[0],
          getUserPerformance: () => USER_PERFORMANCE[0],
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

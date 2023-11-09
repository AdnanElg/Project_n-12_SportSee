import { createContext, useState, useEffect } from "react";
import axios from "axios";

type UserDataType = {
  loading: boolean;
  error: boolean;
  data: null | [];
};

type UserDataContextType = {
  apiState: UserDataType;
};

type UserDataProviderProps = {
  children: React.ReactNode;
};

export const UserDataContext = createContext<UserDataContextType | null>(null);

const UserDataProvider = (props: UserDataProviderProps) => {
  const [apiState, setApiState] = useState<UserDataType>({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    setApiState({ ...apiState, loading: true });

    axios
      .get(import.meta.env.VITE_REACT_API_URL)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error("Wrong resources error");
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setApiState({ loading: false, error: false, data: data });
      })
      .catch((e) => {
        console.log(e);
        setApiState({ loading: false, error: true, data: null });
      });
  }, []);

  return (
    <UserDataContext.Provider value={{ apiState }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;

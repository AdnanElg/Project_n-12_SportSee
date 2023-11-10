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
    const fetchDataUserAll = async () => {
      try {
        setApiState({ ...apiState, loading: true });
        const responce = await axios.get(import.meta.env.VITE_REACT_API_URL);
        if (responce.status !== 200) {
          throw new Error("Wrong resources error");
        }
        const data = responce.data;
        console.log(data);
        setApiState({ loading: false, error: false, data: data });
      } catch (error) {
        console.log(error);
        setApiState({ loading: false, error: true, data: null });
      }
    };
    fetchDataUserAll();
  }, []);

  return (
    <UserDataContext.Provider value={{ apiState }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;

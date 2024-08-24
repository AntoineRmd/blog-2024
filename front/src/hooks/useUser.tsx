import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  username: string;
  id: string;
}
interface UserContextType {
  userInfo: User | null;
  setUserInfo: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    async function getUserInfo() {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, { credentials: "include", method: "GET" });
            if (res.ok) {
                const data = await res.json();
                setUserInfo(data);
            }
        } catch (error) {
            console.log(error);
    }
  }
    getUserInfo();
}, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  return { userInfo, setUserInfo };
}

export { UserContextProvider, useUser };

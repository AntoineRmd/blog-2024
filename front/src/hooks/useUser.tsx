import { createContext, ReactNode, useState } from "react";

const UserContext = createContext({});

function UserContextProvider({children} : {children : ReactNode}) {
    const [userInfo, setUserInfo] = useState({});

    return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;
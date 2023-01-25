import React, { createContext, PropsWithChildren } from "react";

interface user {
  name: string;
  email: string;
}

interface data {
  userData: user;
  setUserData: React.Dispatch<React.SetStateAction<user>>;
}

export const allowAccess = createContext<data | null>(null);

export const UseContest: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = React.useState({} as user);

  
  return (
    <allowAccess.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </allowAccess.Provider>
  );
};

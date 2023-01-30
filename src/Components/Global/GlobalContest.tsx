import React, { createContext, PropsWithChildren } from "react";

interface user {
  name: string;
  email: string;
  _id: string;
}

interface data {
  userData: user;
  setUserData: React.Dispatch<React.SetStateAction<user>>;
}

export const allowAccess = createContext<data | null>(null);

export const GlobalContest: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = React.useState({} as user);

  React.useEffect(() => {
    if (window.localStorage.getItem("microSoftData")) {
      const captureData = JSON.parse(
        window.localStorage.getItem("microSoftData") || ""
      );
      setUserData(captureData);
    }
    return;
  }, []);

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

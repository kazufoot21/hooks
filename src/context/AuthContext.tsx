import React, { VFC, createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider: VFC<Props> = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { useContext, createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();

  function signIn(email, password) {
    setAuthData({ email, password });
  }
  function signOut() {
    setAuthData(undefined);
    return;
  }
  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

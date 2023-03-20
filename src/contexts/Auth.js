import React, { useContext, createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();

  async function signIn(email, password) {
    try {
    } catch (error) {}

    const auth = await signIn(email, password);
    setAuthData(auth);
    return auth;
  }
  async function signOut() {
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

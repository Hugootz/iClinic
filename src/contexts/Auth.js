import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();

  useEffect(() => {
    LoadFromStorage();
  }, []);

  async function LoadFromStorage() {
    const auth = await AsyncStorage.getItem("@AuthData");
    if (auth) {
      setAuthData(JSON.parse(auth));
    }
  }

  async function signIn(email, password) {
    setAuthData({ email, password });
    try {
      await AsyncStorage.setItem("@AuthData", JSON.stringify(email, password));
    } catch (error) {}
  }

  function signOut() {
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
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

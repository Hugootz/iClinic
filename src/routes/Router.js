import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { AuthContext } from "../contexts/Auth";
import { useAuth } from "../contexts/Auth";

export function Routes() {
  const { authData } = useAuth();

  return (
    <NavigationContainer
      screenOptions={{ headerShown: false }}
      independent={true}
    >
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

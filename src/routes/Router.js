import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

import { useAuth } from "../contexts/Auth";

export function Routes() {
  const { authData } = useAuth();

  return (
    <NavigationContainer independent={true}>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

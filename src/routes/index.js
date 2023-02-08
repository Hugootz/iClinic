import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../screens/Welcome";
import { SignIn } from "../screens/SignIn";
const Stack = createNativeStackNavigator();
export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

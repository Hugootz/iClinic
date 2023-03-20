import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { Register } from "../screens/Register";
const Stack = createNativeStackNavigator();
export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

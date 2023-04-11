import React from "react";
import { StatusBar } from "react-native";

import { Routes } from "./src/Routes/Router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { AuthProvider } from "./src/contexts/Auth";
export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
  });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#014ba0" barStyle="light-content" />
      <Routes />
    </AuthProvider>
  );
}

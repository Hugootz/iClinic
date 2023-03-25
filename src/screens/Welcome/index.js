import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { LogoutButton } from "../../components/LogoutButton";

export function Welcome() {
  const navigation = useNavigation();
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
    <View style={styles.container}>
      <View style={styles.logoutButton}>
        <LogoutButton />
      </View>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/1248222.png")}
          style={{ width: "80%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Localize-se de onde estiver!</Text>
        <Text style={styles.text}>Configure como achar melhor</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Acessar </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#014ba0" },
  logoutButton: { marginTop: 20, alignItems: "center" },
  containerLogo: {
    flex: 2,
    backgroundColor: "#014ba0",
    alignItems: "center",
    justifyContent: "center",
  },

  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
  },
  title: {
    color: "#014ba0",
    fontSize: 24,

    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
  text: {
    color: "#014ba0",
    fontSize: 18,
    textAlign: "center",
    padding: 15,
    fontFamily: "Poppins_400Regular",
  },
  button: {
    backgroundColor: "#014ba0",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
  },
});

import React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { BackButton } from "../../components/BackButton";
import { LogoutButton } from "../../components/LogoutButton";

export function Register() {
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
      <Animatable.View
        animation={"fadeInLeft"}
        delay={500}
        style={styles.header}
      >
        <View style={styles.backStyle}>
          <BackButton activeOpacity={1.0} />
        </View>
        <View style={styles.LogoutButton}>
          <LogoutButton />
        </View>

        <Text style={styles.registerTitle}>Configurações</Text>
      </Animatable.View>
      <Animatable.View animation={"fadeInUp"} style={styles.registerForm}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Digite seu email..."
        />
        <Text style={styles.inputTitle}> Senha</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Digite sua senha..."
          secureTextEntry={true}
        />
        <Text style={styles.inputTitle}> Confirme sua senha</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Confirme sua senha..."
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#014ba0" },
  header: {
    color: "#fff",
    marginTop: "14%",
    marginBottom: "10%",
    paddingStart: "5%",
  },
  backStyle: { top: -30 },
  LogoutButton: { alignItems: "flex-end", top: -55, marginRight: 29 },
  registerTitle: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Poppins_500Medium",
  },
  registerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  inputTitle: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    marginTop: 28,
  },
  registerInput: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#014ba0",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: { fontFamily: "Poppins_400Regular", color: "#fff" },
});

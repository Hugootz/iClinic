import React, { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { ButtonLogin } from "../../components/ButtonLogin";
import { BackButton } from "../../components/BackButton";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (email === "" || password === "") {
      alert("Preencha os campos obrigatórios");
      return;
    }
    const data = { email, password };
    console.log(data);
  }

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
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <View style={styles.backStyle}>
          <BackButton activeOpacity={1.0} />
        </View>

        <Text style={styles.textStyle}>iClinic</Text>

        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Digite o email..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Digite sua senha..."
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textRegister}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
        <View style={styles.loginStyle}>
          <ButtonLogin
            title={"Entrar com Google"}
            image={require("../../assets/google-37.png")}
          />
          <ButtonLogin
            title={"Entrar com Apple"}
            image={require("../../assets/Apple-logo.png")}
            style={styles.imageButton}
          />
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#014ba0" },
  containerHeader: { marginTop: "14%", marginBottom: "8%", paddingStart: "5%" },
  backStyle: { top: -30 },

  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  textStyle: {
    color: "#fff",
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
  },
  message: { fontSize: 28, fontFamily: "Poppins_500Medium", color: "#ffffff" },
  title: { fontFamily: "Poppins_400Regular", fontSize: 20, marginTop: 25 },

  titlePass: { fontFamily: "Poppins_400Regular" },
  input: { borderBottomWidth: 1, height: 40, marginBottom: 12, fontSize: 16 },
  button: {
    backgroundColor: "#014ba0",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontFamily: "Poppins_400Regular", color: "#fff" },
  buttonRegister: { marginTop: 14, alignSelf: "center" },
  textRegister: { fontFamily: "Poppins_500Medium" },
  loginStyle: { width: "100%", height: "25%" },
  imageButton: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,

    margin: 12,
    resizeMode: "stretch",
  },
});

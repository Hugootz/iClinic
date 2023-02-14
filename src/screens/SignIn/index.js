import React from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
export function SignIn() {
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
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite o email..." style={styles.input} />
        <Text style={styles.titlePass}>Senha</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textRegister}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#014ba0" },
  containerHeader: { marginTop: "14%", marginBottom: "8%", paddingStart: "5%" },
  containerForm: {},
  message: { color: "#fff", fontSize: 28, fontFamily: "" },
  title: { color: "#fff" },
  titlePass: { color: "#fff" },
  input: {},
  button: {},
  buttonText: { color: "#fff" },
  buttonRegister: {},
  textRegister: { color: "#fff" },
});

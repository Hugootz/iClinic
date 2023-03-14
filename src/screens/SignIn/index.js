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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Informe seu email"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 digítos")
    .required("digite sua senha"),
});

export function SignIn() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  function handleSignIn(data) {
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

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={(value) => onChange(value.trim())}
              onBlur={onBlur}
              value={value}
              placeholder="Digite o email..."
              style={styles.input}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.labelErrors}>{errors.email?.message}</Text>
        )}

        <Text style={styles.title}>Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite sua senha..."
              style={styles.input}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.labelErrors}>{errors.password?.message}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(handleSignIn)}
          style={styles.button}
        >
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
  labelErrors: { alignSelf: "flex-start", color: "#ff375b", marginBottom: 8 },
});

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import {} from "@expo-google-fonts/poppins";

export function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/1248222.png")}
          style={{ width: "80%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.textImage}>iClinic</Text>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Localize-se de onde estiver!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#014ba0" },
  containerLogo: {
    flex: 2,
    backgroundColor: "#014ba0",
    alignItems: "center",
    justifyContent: "center",
  },
  textImage: {
    color: "#fff",
    alignSelf: "center",
    bottom: 40,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Poppins_500Medium",
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
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    color: "#014ba0",
    fontSize: 18,
    textAlign: "center",
    padding: 45,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    backgroundColor: "#014ba0",
    borderRadius: 50,
    padding: 30,
    alignSelf: "center",
    bottom: "15%",
  },
  buttonText: { color: "#ffffff", fontSize: 20, fontWeight: "bold" },
});

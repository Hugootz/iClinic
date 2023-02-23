import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export function ButtonLogin() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image />
      </View>
      <Text>Entrar com Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "#f5f5dc",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  imageContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,

    borderRightWidth: 1,
  },
});

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
export function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../assets/png-clipart-logo-graphic-designer-business-gps-logo-logo-pharmaceutical-drug.png")}
          style={{ width: "100%" }}
          resizeMode="center"
        />
      </View>
      <View style={styles.containerForm}>
        <Text>Localize-se onde estiver!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerLogo: {},
  containerForm: {},
});

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export function ButtonLogin() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image />
      </View>
      <Text></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
});

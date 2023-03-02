import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
export function ButtonLogin({ title, image }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle}>
          <Image style={styles.imageStyle} source={image} />
          <View style={styles.separatorText} />
          <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 5,
    padding: 30,
  },

  buttonStyle: {
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#808080",

    padding: 10,
  },
  imageStyle: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRightWidth: 1,
    padding: 10,
    margin: 15,

    resizeMode: "stretch",
  },
  separatorText: {
    backgroundColor: "#808080",
    width: 1,
    height: 40,
  },
  textStyle: {
    flexDirection: "row",
    marginBottom: 4,
    marginLeft: 10,
    alignSelf: "center",
    paddingHorizontal: 15,
    color: "#808080",
  },
});

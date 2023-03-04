import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function BackButton() {
  return (
    <View>
      <AntDesign name="back" size={24} color={"#fff"} />
    </View>
  );
}

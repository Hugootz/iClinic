import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function BackButton() {
  return (
    <TouchableOpacity>
      <AntDesign name="left" size={24} color={"#fff"} />
    </TouchableOpacity>
  );
}

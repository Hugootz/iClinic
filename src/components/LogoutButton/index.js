import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../contexts/Auth";

export function LogoutButton() {
  const { signOut } = useAuth();
  return (
    <TouchableOpacity onPress={signOut}>
      <Feather name="power" size={24} color="white" />
    </TouchableOpacity>
  );
}

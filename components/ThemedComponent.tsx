import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "@/app/contexto";

export function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme === "light" ? "white" : "black",
        },
      ]}
    >
      <Text style={{ color: theme === "light" ? "black" : "white" }}>
        Componente Hijo
      </Text>
      <Text
        style={[styles.text, { color: theme === "light" ? "black" : "white" }]}
      >
        Current Theme: {theme}
      </Text>
      <TouchableOpacity
        onPress={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: theme === "light" ? "blue" : "red",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 20 },
});

import React, { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeParentComponent } from "@/components/ThemeParentComponent";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export default function Contexto() {
  const [theme, setTheme] = useState<Theme>("light");

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View style={styles.container}>
        <ThemeParentComponent />
      </View>
    </ThemeContext.Provider>
  );

  return;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

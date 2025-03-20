import { View, Text } from "react-native";
import { ThemedComponent } from "./ThemedComponent";

export const ThemeParentComponent = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#CCC", padding: 20 }}>
      <Text>Componente Padre</Text>
      <ThemedComponent />
    </View>
  );
};

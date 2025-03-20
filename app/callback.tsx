import React, { useState, useCallback, useRef, memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ComponenteBotonHijo = memo(({ onPress }: { onPress: () => void }) => {
  console.log("Componente Hijo se re-renderizó!");
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.textButton}>Botón del componente hijo</Text>
    </TouchableOpacity>
  );
});

export default function Callback() {
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    console.log("Se apretó el botón");
  }, []);

  const functionRef = useRef(handlePress);

  console.log(
    "Es la función y la referencia el mismo valor?",
    functionRef.current === handlePress
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <ComponenteBotonHijo onPress={handlePress} />
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}
      >
        <Text style={styles.textButton}>Actualizar en +1 el contador</Text>
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#CCC",
    borderRadius: 5,
  },
  textButton: {
    color: "black",
  },
});

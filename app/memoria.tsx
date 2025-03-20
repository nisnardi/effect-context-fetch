import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Memoria() {
  const [numero, setNumero] = useState(0);

  const cuadrado = useMemo(() => {
    console.log("Calculando el cuadrado del número...");
    return numero * numero;
  }, [numero]);

  const onPressHandler = () => setNumero(numero + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valor del Cuadrado: {cuadrado}</Text>
      <Text style={styles.text}>Valor del Cuadrado: {cuadrado}</Text>
      <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <Text>Incrementar el valor del número</Text>
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
  button: {
    padding: 10,
    backgroundColor: "#CCC",
    borderRadius: 5,
    marginTop: 10,
  },
});

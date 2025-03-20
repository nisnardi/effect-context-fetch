import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function FetchData() {
  const [contador, setContador] = useState(0);

  // Sin dependencias
  useEffect(() => {
    console.log("useEffect sin dependencias se ejecuta en cada render.");
  });

  // Con dependencia vacia
  useEffect(() => {
    console.log(
      "useEffect con dependencias vacía se ejecuta solamente cuando el componente se monta o renderiza por primera vez."
    );
  }, []);

  useEffect(() => {
    console.log(
      "useEffect con dependencias se ejecuta cada vez que algún valor de las dependencias cambia de valor."
    );
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>Contador: {contador}</Text>
      <Button
        title="Incrementar estado y ver la consola"
        onPress={() => {
          setContador(contador + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  contador: { fontSize: 24, marginBottom: 20 },
});

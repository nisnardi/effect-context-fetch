import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Estado() {
  const [count, setCount] = useState(0);

  const onPressHandler = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Contador: {count}</Text>
      <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50 },
  count: { fontSize: 24 },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: { color: "white", fontSize: 20 },
});

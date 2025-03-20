import React, { useReducer } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Action = "increment" | "decrement";

function reducer(state: { count: number }, action: { type: Action }) {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Achicar() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {state.count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => dispatch({ type: "increment" })}
          style={styles.button}
        >
          <Text style={[styles.textButton, { color: "#ffff00" }]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch({ type: "decrement" })}
          style={[styles.button, { backgroundColor: "#ffff00" }]}
        >
          <Text style={[styles.textButton, { color: "darkblue" }]}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 24,
  },
  button: {
    padding: 10,
    backgroundColor: "darkblue",
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});

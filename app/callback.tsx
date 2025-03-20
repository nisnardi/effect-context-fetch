import React, { useState, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Parent() {
  const [count, setCount] = useState(0);
  // const handlePress = useCallback(() => {
  //   console.log("Button clicked");
  // }, []);
  const handlePress = useCallback(() => {
    console.log("Button clicked");
  }, []);

  // Track the function's reference
  const functionRef = useRef(handlePress);
  console.log("Same function reference:", functionRef.current === handlePress);

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Child onPress={handlePress} />
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Increase Count</Text>
      </TouchableOpacity>
    </View>
  );
}

function Child({ onPress }) {
  console.log("Child component re-rendered!");
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        padding: 10,
        backgroundColor: "green",
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white" }}>Click Me</Text>
    </TouchableOpacity>
  );
}

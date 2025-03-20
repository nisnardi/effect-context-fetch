import React, { useRef, LegacyRef } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

export default function Referencia() {
  const inputRef = useRef<TextInput>(undefined);

  const onPressHandler = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef as LegacyRef<TextInput>}
        placeholder="Presionar el botón para hacer foco en el Input..."
        style={styles.input}
      />
      <Button title="Enfocar Intput" onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 18,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

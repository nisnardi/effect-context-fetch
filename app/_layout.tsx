import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="estado" options={{ title: "Estado" }} />
      <Stack.Screen name="efecto" options={{ title: "Efecto" }} />
      <Stack.Screen name="fetch" options={{ title: "Cargando Datos" }} />
      <Stack.Screen name="contexto" options={{ title: "Contexto" }} />
      <Stack.Screen name="referencia" options={{ title: "Referencia" }} />
      <Stack.Screen name="memoria" options={{ title: "Memoria" }} />
      <Stack.Screen
        name="callback"
        options={{ title: "Te llamo más tarde? - Callback" }}
      />
    </Stack>
  );
}

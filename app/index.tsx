import { SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/estado">Ir a Estado</Link>
      <Link href="/efecto">Ir a Efecto</Link>
      <Link href="/fetch">Ir a Carga de Datos</Link>
      <Link href="/contexto">Ir a Contexto</Link>
      <Link href="/referencia">Ir a Referencia</Link>
      <Link href="/memoria">Ir a Memoria</Link>
      <Link href="/callback">Ir a Te llamo más tarde? - Callback</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/estado">Ir a Si al estado le das más poder.. - Estado</Link>
      <Link href="/efecto">Ir a Efecto Maripoza - Efecto</Link>
      <Link href="/fetch">Ir a Go Fetch - Fetch</Link>
      <Link href="/contexto">Ir a En que contexto me lo decis? - Contexto</Link>
      <Link href="/referencia">Ir a Y vos sos un referente? Referencia</Link>
      <Link href="/memoria">
        Ir a Cada día me falla más la memoria - Memoria
      </Link>
      <Link href="/callback">Ir a Te llamo más tarde? - Callback</Link>
      <Link href="/reducer">Ir a Querida reduje a los niños - Reducer</Link>
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

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";

interface TODO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ItemProps {
  item: TODO;
}

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const Item = ({ item }: ItemProps) => {
  return (
    <View style={styles.item}>
      <Text>
        ID: {item.id} UserID: {item.userId} Title: {item.title} Completado:{" "}
        {item.completed}
      </Text>
    </View>
  );
};

export default function Efecto() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoadingError(null);
      setIsLoading(true);
      try {
        const response = await fetch(API_URL);
        const todos = await response.json();

        setData(todos);
      } catch (error: unknown) {
        console.log(error);
        if (error instanceof Error) {
          setLoadingError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#CCC" />
      ) : loadingError === null ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <Text>Error</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  item: { paddingVertical: 10 },
  separator: { height: 1, backgroundColor: "#CCC" },
});

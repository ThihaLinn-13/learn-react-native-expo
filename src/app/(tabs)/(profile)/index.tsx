import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCount } from "@/provider/countContext";
import { Link } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Profile() {
  const { count } = useCount();
  const [name, setName] = useState("");

  const getFromSecureStore = async () => {
    const username = await SecureStore.getItemAsync("name");
    setName(username || "no name Found");
  };

  const deleteFromSecureStore = async () => {
    await SecureStore.deleteItemAsync("name");
    setName("");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Text>Count: {count}</Text>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Get from secure Store" onPress={getFromSecureStore} />
      </ThemedView>
      <ThemedText>Name: {name}</ThemedText>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button
          title="Delete from secure Store"
          onPress={deleteFromSecureStore}
        />
      </ThemedView>
      <Link href="/setting/thiha">setting</Link>
    </View>
  );
}

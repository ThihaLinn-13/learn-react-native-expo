import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCount } from "@/provider/countContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SecureStoreScreen() {
  const [text, setText] = useState("");
  const { count, increase, decrease } = useCount();
  const router = useRouter();

  const [value, setValue] = useState<{ name: string; age: number }>({
    name: "",
    age: 0,
  });

  const getFromAsyncStorage = async () => {
    try {
      const person = await AsyncStorage.getItem("person");
      setValue(person ? JSON.parse(person) : {});
    } catch (error) {
      console.log(error);
    }
  };
  const saveToSecureStore = async () => {
    await SecureStore.setItemAsync("name", text);
  };

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
    <SafeAreaView>
      <TextInput
        style={{
          marginHorizontal: 30,
          marginVertical: 10,
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 5,
        }}
        placeholder="Type here"
        defaultValue={text}
        onChangeText={(text) => {
          setText(text);
        }}
      ></TextInput>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Save to secure Store" onPress={saveToSecureStore} />
      </ThemedView>

      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button
          title="Go to Detail Page"
          onPress={() => router.push("/detail?id=1")}
        />
      </ThemedView>
      <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
        Name: {name}
      </ThemedText>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Get from secure Store" onPress={getFromSecureStore} />
      </ThemedView>

      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button
          title="Delete from secure Store"
          onPress={deleteFromSecureStore}
        />
      </ThemedView>
      <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
        Count: {count}
      </ThemedText>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Increase" onPress={increase} />
      </ThemedView>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Decrease" onPress={decrease} />
      </ThemedView>
    </SafeAreaView>
  );
}

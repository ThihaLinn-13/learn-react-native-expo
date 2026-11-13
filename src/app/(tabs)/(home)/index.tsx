import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCount } from "@/provider/countContext";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [text, setText] = useState("");
  const { count, increase, decrease } = useCount();
  const router = useRouter();

  const saveToSecureStore = async () => {
    await SecureStore.setItemAsync("name", text);
  };

  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Hello {text}
        </ThemedText>
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
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Count: {count}
        </ThemedText>
        <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Button title="Increase" onPress={increase} />
        </ThemedView>
        <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Button title="Decrease" onPress={decrease} />
        </ThemedView>
      </ThemedView>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button
          title="Go to Detail Page"
          onPress={() => router.push("/detail?id=1")}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

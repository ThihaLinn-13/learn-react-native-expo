import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MMKV, MMKVENC } from "@/mmkv/store";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import { useMMKVStorage } from "react-native-mmkv-storage/dist/src/hooks/useMMKV";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const [text, setText] = useState("");
  const [username, setUsername] = useMMKVStorage("username", MMKV, "unknown");
  const [token, setToken] = useMMKVStorage("token", MMKVENC, "unknown");

  const setStringWithMMKV = async () => {
    await MMKV.setStringAsync("username", text);
    const username = await MMKV.getStringAsync("username");
    setUsername(username || "unknown");
  };

  const getStringWithMMKV = async () => {
    const username = await MMKV.getStringAsync("username");
    setUsername(username || "unknown");
  };

  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Hello {username}
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
          <Button
            title="Save to MMKV Storage"
            onPress={() => setUsername(text)}
          />
        </ThemedView>
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Hello {username}
        </ThemedText>
        <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Button title="Save to MMKV Storage" onPress={setStringWithMMKV} />
        </ThemedView>
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Token {token}
        </ThemedText>
        <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Button
            title="Save to MMKV Storage with Encryption"
            onPress={() => setToken("12345")}
          />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

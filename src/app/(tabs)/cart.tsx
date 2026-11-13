import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
export default function Cart() {
  const insects = useSafeAreaInsets();
  const [form, setFrom] = useState<{ name: string; age: number }>({
    name: "",
    age: 0,
  });

  const saveToAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify(form));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <View style={{ flex: 1, paddingTop: insects.top }}>
    <SafeAreaView>
      <ThemedView>
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Hello {form?.name}
        </ThemedText>
        <TextInput
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 5,
          }}
          placeholder="Type Name"
          defaultValue={form?.name}
          onChangeText={(name) => setFrom({ ...form, name: name })}
        ></TextInput>
        <TextInput
          style={{
            marginHorizontal: 30,
            marginVertical: 10,
            borderWidth: 0.5,
            padding: 10,
            borderRadius: 5,
          }}
          inputMode="numeric"
          placeholder="Type Age"
          defaultValue={form.age.toString()}
          onChangeText={(text) => {
            const age = parseInt(text) || 0;
            setFrom({ ...form, age });
          }}
        ></TextInput>
        <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Button title="Save to Async Store" onPress={saveToAsyncStorage} />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>

    // </View>
  );
}

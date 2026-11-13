import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AsyncStorageScreen() {
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
  return (
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
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Name: {value?.name}
        </ThemedText>
        <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
          Age: {value?.age}
        </ThemedText>
        <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
          <Button title="Get from Async Store" onPress={getFromAsyncStorage} />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginHorizontal: 30, marginVertical: 10 }}>
        Detail Screen : {id}
      </Text>
      <Link
        href={"/event"}
        replace
        style={{ marginHorizontal: 30, marginVertical: 10 }}
      >
        replace Event Screen
      </Link>
      <Link
        href={"/detail?id=31"}
        push
        style={{ marginHorizontal: 30, marginVertical: 10 }}
      >
        push another detail
      </Link>
      <Button
        title="Still screen"
        onPress={() => {
          router.navigate({ pathname: "/detail", params: { id: 13 } });
        }}
      />
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button
          title=" push to event"
          onPress={() => {
            router.push({ pathname: "/event", params: { id: 131 } });
          }}
        />
      </ThemedView>
      <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
        Name: {value?.name}
      </ThemedText>
      <ThemedText style={{ marginHorizontal: 30, marginVertical: 10 }}>
        Age: {value?.age}
      </ThemedText>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Get from secure Store" onPress={getFromAsyncStorage} />
      </ThemedView>
      <ThemedView style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Button title="Save to secure Store" onPress={getFromAsyncStorage} />
      </ThemedView>
    </View>
  );
}

import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Event() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Event",
          headerRight: () => <Button title="Update" />,
        }}
      />
      <Text>Event</Text>
    </View>
  );
}

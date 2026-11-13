import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "storage",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="storage"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="mmkv" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen
        name="secureStore"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="asyncStorage"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}

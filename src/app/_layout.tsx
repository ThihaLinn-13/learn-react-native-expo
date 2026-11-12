import { Stack } from "expo-router";

export default function RootLayout() {
  const login = true;
  return (
    <Stack>
      <Stack.Protected guard={login}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!login}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

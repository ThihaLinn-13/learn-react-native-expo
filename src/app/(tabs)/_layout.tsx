import { Tabs } from "expo-router";

export default function RootLayout() {
  const isAdmin = false;

  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Protected guard={isAdmin}>
        <Tabs.Screen
          name="explore"
          options={{ title: "explore", headerShown: false }}
        />
      </Tabs.Protected>

      <Tabs.Screen
        name="(profile)"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
}

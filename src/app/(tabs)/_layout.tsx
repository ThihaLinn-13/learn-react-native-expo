import { Tabs } from "expo-router";

export default function RootLayout() {
  const isAdmin = true;

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
        name="(storage)"
        options={{ title: "Storage", headerShown: false }}
      />
      <Tabs.Screen
        name="cart"
        options={{ title: "Cart", headerShown: false }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

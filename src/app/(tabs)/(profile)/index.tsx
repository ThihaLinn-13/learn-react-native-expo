import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Link href="/setting/thiha">setting</Link>
    </View>
  );
}

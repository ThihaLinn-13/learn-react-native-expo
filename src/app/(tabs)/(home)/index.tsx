import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Link href={"/detail?id=5"}>Detail</Link>
      <Link href={"/setting/david"}>Setting</Link>
      <Button
        title="Go to Detail"
        onPress={() =>
          router.navigate({ pathname: "/detail", params: { id: 1 } })
        }
      />
    </View>
  );
}

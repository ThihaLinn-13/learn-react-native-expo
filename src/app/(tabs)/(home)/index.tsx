import { ThemedText } from "@/components/themed-text";
import { Link, useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText style={{ fontFamily: "Roboto" }}>Home</ThemedText>
      <ThemedText style={{ fontFamily: "PatrickHand" }}>Home</ThemedText>

      <ThemedText>
        <Link href={"/detail?id=5"}>Detail</Link>
      </ThemedText>
      <ThemedText>
        <Link href={"/setting/david"}>Setting</Link>
      </ThemedText>
      <Button
        title="Go to Detail"
        onPress={() =>
          router.navigate({ pathname: "/detail", params: { id: 1 } })
        }
      />
    </View>
  );
}

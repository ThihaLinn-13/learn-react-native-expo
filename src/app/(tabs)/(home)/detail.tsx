import { Link, router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen : {id}</Text>
      <Link href={"/event"} replace>
        replace Event Screen
      </Link>
      <Link href={"/detail?id=31"} push>
        push another detail
      </Link>
      <Button
        title="Still screen"
        onPress={() => {
          router.navigate({ pathname: "/detail", params: { id: 13 } });
        }}
      />
      <Button
        title=" push to event"
        onPress={() => {
          router.push({ pathname: "/event", params: { id: 131 } });
        }}
      />
    </View>
  );
}

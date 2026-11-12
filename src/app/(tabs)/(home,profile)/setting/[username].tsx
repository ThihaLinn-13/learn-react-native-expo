import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function UserSetting() {
  const { username } = useLocalSearchParams();
  const router = useRouter();
  //   const navigation = useNavigation();

  //   useEffect(() => {
  //     navigation.setOptions({
  //       title: username,
  //     });
  //   });

  return (
    <View>
      <Stack.Screen options={{ title: username as string }}></Stack.Screen>
      <Text>UserSetting - {username}</Text>
      <Button
        title="Update title"
        onPress={() => {
          router.setParams({ username: "Updated" });
        }}
      />
    </View>
  );
}

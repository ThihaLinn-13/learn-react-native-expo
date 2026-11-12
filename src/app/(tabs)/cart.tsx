import { Image } from "expo-image";
import { Text } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
export default function Cart() {
  const insects = useSafeAreaInsets();
  return (
    // <View style={{ flex: 1, paddingTop: insects.top }}>
    <SafeAreaView>
      <Text>Cart</Text>
      <Image
        source={require("@/assets/images/android-icon-foreground.png")}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          backgroundColor: "red",
        }}
      />
    </SafeAreaView>

    // </View>
  );
}

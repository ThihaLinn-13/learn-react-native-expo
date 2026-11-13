import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Storage() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.componentConainer}>
      <ThemedView style={styles.buttonContainer}>
        <Button title="Learn MMKV" onPress={() => router.push("/mmkv")} />
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button
          title="Learn SecureStore"
          onPress={() => router.push("/secureStore")}
        />
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <Button
          title="Learn AsyncStorage"
          onPress={() => router.push("/asyncStorage")}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  componentConainer: {
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

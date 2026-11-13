import { CountProvider } from "@/provider/countContext";
import { useFonts } from "expo-font";
import {
  DarkTheme,
  DefaultTheme,
  SplashScreen,
  Stack,
  ThemeProvider,
} from "expo-router";
import { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Roboto: require("@/assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    PatrickHand: require("@/assets/fonts/PatrickHand-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const login = true;
  return (
    <CountProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Protected guard={login}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack.Protected>
          <Stack.Protected guard={!login}>
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack>
        <StatusBar barStyle="auto" />
      </ThemeProvider>
    </CountProvider>
  );
}

import "../global.css";
import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from hiding until the fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // Define the hideSplashScreen callback outside of useEffect
  const hideSplashScreen = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  if (!fontsLoaded) {
    return null; // Optionally, render a loading indicator
  }

  return <Stack />;
}

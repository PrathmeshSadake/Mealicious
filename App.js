import React from "react";
import AppLoading from "expo-app-loading";

import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    );
  }
}

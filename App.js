import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <Text>Our react native blank canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 },
  search: {
    padding: 20,
    backgroundColor: "pink",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ padding: 16 }}>
        <Searchbar />
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;

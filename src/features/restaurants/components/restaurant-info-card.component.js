import React from "react";
import { Text } from "react-native";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Vishwanand",
    icon,
    photos = ["https://source.unsplash.com/IDTEXXXfS44"],
    address = "CBD Belapur",
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};

export default RestaurantInfoCard;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

const StyledRestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledRestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const StyledAddress = styled.Text``;
const StyledInfo = styled.view``;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80.jpg ",
    ],
    address = "Some random street 105, 99 Abiance Mall",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <StyledRestaurantCard elevation={5}>
      <StyledRestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <StyledInfo>
        <StyledTitle>{name}</StyledTitle>
        <StyledAddress>{address}</StyledAddress>
      </StyledInfo>
    </StyledRestaurantCard>
  );
};

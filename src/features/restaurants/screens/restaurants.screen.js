import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import styled from "styled-components/native";

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const StyledSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff;
`;
const StyledList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff;
`;

export const RestaurantsScreen = () => (
  <StyledSafeArea>
    <StyledSearchContainer>
      <Searchbar placeholder="Search" />
    </StyledSearchContainer>
    <StyledList>
      <RestaurantInfoCard />
    </StyledList>
  </StyledSafeArea>
);

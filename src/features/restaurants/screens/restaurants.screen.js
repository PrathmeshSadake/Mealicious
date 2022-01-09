import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const StyledSearchContainer = styled(View)`
  padding: 16px;
`;
const StyledRestaurantInfoCardContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const RestaurantsScreen = () => {
  return (
    <StyledSafeAreaView>
      <StyledSearchContainer>
        <Searchbar />
      </StyledSearchContainer>
      <StyledRestaurantInfoCardContainer>
        <RestaurantInfoCard />
      </StyledRestaurantInfoCardContainer>
    </StyledSafeAreaView>
  );
};

export default RestaurantsScreen;

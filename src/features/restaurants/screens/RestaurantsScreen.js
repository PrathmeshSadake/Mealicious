import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../../../components/RestaurantInfoCard";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const StyledRestaurantInfoCardContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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

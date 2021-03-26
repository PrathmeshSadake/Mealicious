import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { StyledSafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const StyledSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff;
`;

const StyledRestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const StyledLoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const StyledLoading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);
  return (
    <StyledSafeArea>
      {isLoading && (
        <StyledLoadingContainer>
          <StyledLoading size={50} animating={true} color={Colors.blue300} />
        </StyledLoadingContainer>
      )}
      <StyledSearchContainer>
        <Searchbar placeholder="Search" />
      </StyledSearchContainer>
      <StyledRestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer key={item.name} position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </StyledSafeArea>
  );
};

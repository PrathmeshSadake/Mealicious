import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { StyledSafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";

const StyledSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff;
`;

const StyledRestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <StyledSafeArea>
    <StyledSearchContainer>
      <Searchbar placeholder="Search" />
    </StyledSearchContainer>
    <StyledRestaurantList
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </StyledSafeArea>
);

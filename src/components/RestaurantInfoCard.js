import React from "react";
import { Card, Title } from "react-native-paper";
import styled from "styled-components";

const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;
const StyledCard = styled(Card)`
  background-color: white;
`;
const StyledCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

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
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <Card.Content>
        <StyledTitle>Card title</StyledTitle>
      </Card.Content>
    </StyledCard>
  );
};

export default RestaurantInfoCard;

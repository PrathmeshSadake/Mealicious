import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const StyledTitle = styled(Title)``;
const StyledCard = styled(Card)`
  background-color: white;
`;
const StyledCover = styled(Card.Cover)`
  background-color: white;
  padding: 10px;
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
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </StyledCard>
  );
};

export default RestaurantInfoCard;

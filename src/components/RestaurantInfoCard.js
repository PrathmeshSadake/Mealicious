import React from "react";
import styled from "styled-components";
import { Card, Title, Text } from "react-native-paper";
import { StatusBar, SafeAreaView, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";

const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;
const StyledAddress = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const StyledCard = styled(Card)`
  background-color: white;
`;
const StyledCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledInfo = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const StyledRating = styled(View)`
  flex-direction: row;
`;
const StyledSection = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Vishwanand",
    icon,
    photos = ["https://source.unsplash.com/IDTEXXXfS44"],
    address = "CBD Belapur",
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <StyledInfo>
        <StyledTitle>{name}</StyledTitle>
        <StyledSection>
          <StyledRating>
            {ratingArray.map((rating) => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </StyledRating>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red", fontWeight: "bold" }}>
              Closed Temporarily
            </Text>
          )}
          {open && <SvgXml xml={open} width={20} height={20} />}
        </StyledSection>

        <StyledAddress>{address}</StyledAddress>
      </StyledInfo>
    </StyledCard>
  );
};

export default RestaurantInfoCard;

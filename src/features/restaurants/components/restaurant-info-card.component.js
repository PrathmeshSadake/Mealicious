import React from "react";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.component";

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
const StyledAddress = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.button};
font-weight: ${(props) => props.theme.fontWeights.medium}
color: ${(props) => props.theme.colors.ui.primary};
`;
const StyledInfo = styled.View`
  padding: ${(props) => props.theme.space[3]} 0px;
`;
const StyledRating = styled.View`
  flex-direction: row;
`;
const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${(props) => props.theme.space[2]} 0px;
`;
const StyledSectionEnd = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "The Park",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80.jpg ",
    ],
    address = "99 Abiance Mall",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(Array(Math.floor(rating)));
  return (
    <StyledRestaurantCard elevation={5}>
      <StyledRestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <StyledInfo>
        <StyledTitle>{name}</StyledTitle>
        <StyledRow>
          <StyledRating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </StyledRating>
          <StyledSectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer variant="left.medium" />
            {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
            <Spacer variant="left.large" />

            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={{ uri: icon }}
            />
          </StyledSectionEnd>
        </StyledRow>
        <StyledAddress>{address}</StyledAddress>
      </StyledInfo>
    </StyledRestaurantCard>
  );
};

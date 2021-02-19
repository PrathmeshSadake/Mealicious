import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  StyledAddress,
  StyledIcon,
  StyledInfo,
  StyledRating,
  StyledRestaurantCard,
  StyledRestaurantCardCover,
  StyledRow,
  StyledSectionEnd,
} from "./restaurant-info-card.styles";

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
        <Text variant="label">{name}</Text>
        <StyledRow>
          <StyledRating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </StyledRating>
          <StyledSectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
            </Spacer>
            <Spacer position="left" size="large">
              <StyledIcon source={{ uri: icon }} />
            </Spacer>
          </StyledSectionEnd>
        </StyledRow>
        <StyledAddress variant="caption">{address}</StyledAddress>
      </StyledInfo>
    </StyledRestaurantCard>
  );
};

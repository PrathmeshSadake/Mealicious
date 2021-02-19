import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const StyledRestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const StyledRestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const StyledAddress = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.button};
font-weight: ${(props) => props.theme.fontWeights.medium}
color: ${(props) => props.theme.colors.ui.primary};
`;

export const StyledInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const StyledRating = styled.View`
  flex-direction: row;
`;
export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${(props) => props.theme.space[1]} 0px;
`;
export const StyledIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const StyledSectionEnd = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

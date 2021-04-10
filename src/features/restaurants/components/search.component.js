import React, { useContext } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const StyledSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

function Search() {
  const locationContext = useContext(LocationContext);
  console.log(locationContext);
  return (
    <StyledSearchContainer>
      <Searchbar placeholder="Search for a location" />
    </StyledSearchContainer>
  );
}

export { Search };

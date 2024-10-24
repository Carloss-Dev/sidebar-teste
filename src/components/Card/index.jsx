import React from "react";
import { StyledDiv, StyledH2 } from "./style";

export const Card = ({ children, width }) => {
  return (
    <StyledDiv $width={width}>
      <StyledH2>{children}</StyledH2>
    </StyledDiv>
  );
};

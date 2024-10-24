import { styled } from "styled-components";

export const StyledDiv = styled.div`
  width: ${({ $width }) => $width || "15rem"};
  height: 15rem;
  border: 2px solid #161a1d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledH2 = styled.h2`
  font-size: 1rem;
`;

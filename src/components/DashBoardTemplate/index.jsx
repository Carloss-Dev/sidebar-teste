import {
  GridContainer,
  StyledH1,
  StyledHeader,
  StyledInput,
  StyledMain,
  StyledSideBar,
} from "./style";

export const DashBoard = ({ children }) => {
  return (
    <GridContainer>
      <StyledHeader>
        <StyledH1>Dashboard</StyledH1>
        <StyledInput placeholder="Search transactions, customers, subscriptions" />
      </StyledHeader>
      <StyledSideBar></StyledSideBar>
      <StyledMain>{children}</StyledMain>
    </GridContainer>
  );
};

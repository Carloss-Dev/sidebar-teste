import { styled } from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  border: 2px solid red;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: minmax(14rem, 16%) repeat(4, 1fr);
  grid-template-rows: 8rem repeat(3, 1fr);
  grid-template-areas:
    "asid head head head head"
    "asid cont cont cont cont"
    "asid cont cont cont cont"
    "asid cont cont cont cont";
`;

export const StyledSideBar = styled.nav`
  grid-area: asid;
  padding: 2rem 0;
  background-color: #0d1f2d;
`;

export const StyledHeader = styled.header`
  grid-area: head;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

export const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

export const StyledInput = styled.input`
  background-color: #f0f0f0;
  border: none;
  border-radius: 0.6rem;
  width: 35%;
  height: 50%;
  padding-left: 1rem;
`;

export const StyledMain = styled.main`
  grid-area: cont;
  padding: 3rem;
  display: grid;

  //Define colunas de forma dinâmica.
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  // Não sei se isso afeta em algo coloquei apenas para testes
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;

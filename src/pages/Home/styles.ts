import styled from "styled-components";

export const AllCoffes = styled.section`
  margin-block: 8rem 2rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 32px;
    color: ${(props) => props.theme.COLORS.BASE["BASE_SUBTITLE"]};
    margin-bottom: 40px;
  }
`;

export const CardsCoffe = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

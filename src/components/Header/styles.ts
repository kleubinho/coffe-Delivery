import styled from "styled-components";

export const HeaderContainer = styled.head`
width: 100%;
max-width: ${({theme}) => theme.MAX_WIDTH}px;
`

export const Logo = styled.img`
  width: 10px;
  object-fit: cover;
`;

import { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({theme}) => theme.COLORS.BASE.BACKGROUND};
}

button {
    border-radius: 6px;

    ${({ theme }) => css`
      background-color: ${theme.COLORS.PRODUCT.YELLOW};
      color: ${theme.COLORS.BASE.WHITE};
    `}
}
`;

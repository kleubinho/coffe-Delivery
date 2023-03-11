import styled, { css } from "styled-components";
import { ShoppingCart, Plus, Minus } from "phosphor-react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-block: 0 20px;
  padding-inline: 25px;
  background-color: ${(props) => props.theme.COLORS.BASE["BASE_CARD"]};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;

  h2 {
    margin-top: 10px;
    font-family: "Baloo 2", sans-serif;
  }

  p {
    &:nth-of-type(1) {
      text-align: center;
      color: ${(props) => props.theme.COLORS.BASE["BASE_LABEL"]};
    }
  }
`;

export const CoffeImg = styled.img`
  width: 120px;
  height: 120px;
  position: relative;
  top: -20px;
`;

export const TypeCoffe = styled.span`
  ${({ theme }) => css`
    background: ${theme.COLORS.PRODUCT["YELLOW_LIGHT"]};
    color: ${theme.COLORS.PRODUCT["YELLOW_DARK"]};
  `}
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const AddCart = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p:nth-child(1) {
    small {
      font-size: 15px;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      margin-right: 5px;
    }
    font-family: "Baloo 2", sans-serif;
    font-size: 25px;
    color: ${(props) => props.theme.COLORS.BASE["BASE_TEXT"]};
  }
`;

export const QuantityCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.COLORS.BASE["BASE_BUTTON"]};
  padding: 12px 5px;
`;

export const BackgroundCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px;
  background-color: ${(props) => props.theme.COLORS.PRODUCT["PURPLE_DARK"]};
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.COLORS.PRODUCT["PURPLE"]};
  }
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.PRODUCT["PURPLE"],
  cursor: "pointer",
  fill: theme.COLORS.PRODUCT["YELLOW_DARK"]
}))`
  &:hover {
    color: ${(props) => props.theme.COLORS.PRODUCT["YELLOW_DARK"]};
  }
`;

export const MinusIcon = styled(Minus).attrs(({ theme }) => ({
  color: theme.COLORS.PRODUCT["PURPLE"],
  cursor: "pointer",
}))``;

export const ShoppingCartIcon = styled(ShoppingCart).attrs(() => ({
  weight: "fill",
  size: 30,
  color: "#fff",
  cursor: "pointer",
}))`
  padding: 2px;
`;

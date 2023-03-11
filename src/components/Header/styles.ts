import styled from "styled-components";
import { MapPin, ShoppingCart } from "phosphor-react";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding-block: 20px;
`;

export const Logo = styled.img`
  width: 87px;
  object-fit: contain;
`;

export const CheckoutLocation = styled.div`
  display: flex;
  gap: 30px;
`;

export type BackgrounIconVariant = "primary" | "secondary";
interface BackgroundIconProps {
  variant: BackgrounIconVariant;
}

const backgrounIconVariants = {
  primary: "#EBE5F9",
  secondary: "#F1E9C9",
};

export const HeaderIcon = styled.div<BackgroundIconProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    background-color: ${props => props.theme.COLORS.PRODUCT['YELLOW_DARK']};
    z-index: 1;
    right: -8px;
    top: -10px;
    display: flex;
    align-items: center;
    border-radius: 100%;
    padding: 10px 6px;

    small {
    line-height: 0;
    color: #fff;
  }
  }

  p {
    color: ${({ theme }) => theme.COLORS.PRODUCT.PURPLE_DARK};
  }

  ${(props) => {
    return `background-color: ${backgrounIconVariants[props.variant]}`;
  }}
`;

export const MapIcon = styled(MapPin).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.PRODUCT.PURPLE,
  weight: "fill",
}))``;

export const ShoppingCartIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.PRODUCT["YELLOW_DARK"],
  weight: "fill",
}))``;
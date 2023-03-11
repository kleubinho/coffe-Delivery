import styled, {css} from "styled-components";
import { MapPin } from "phosphor-react";

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
  secondary: "#F1E9C9"
}

export const HeaderIcon = styled.div<BackgroundIconProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 10px;

  p {
    color: ${({theme}) => theme.COLORS.PRODUCT.PURPLE_DARK}
  }
  
  ${props => {
    return `background-color: ${backgrounIconVariants[props.variant]}`
  }}
`;

export const MapIcon = styled(MapPin).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.PRODUCT.PURPLE,
  weight: "fill",
}))``;

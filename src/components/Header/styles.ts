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

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const MapIcon = styled(MapPin).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.PRODUCT.PURPLE,
  weight: "fill",
}))``;

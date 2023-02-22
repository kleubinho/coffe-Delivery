import { MapPin, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import logo from "../../assets/Logo.png";
import { CheckoutLocation, HeaderContainer, HeaderIcon, Logo, MapIcon } from "./styles";

export function Header() {

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo COffe" />

      <CheckoutLocation>
        <HeaderIcon>
          <MapIcon  />
          <p>São Paulo, SP</p>
        </HeaderIcon>

        <HeaderIcon>
          <ShoppingCart size={22} weight="fill" />
        </HeaderIcon>
      </CheckoutLocation>
    </HeaderContainer>
  );
}

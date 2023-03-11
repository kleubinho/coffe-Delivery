import { ShoppingCart } from "phosphor-react";
import logo from "../../assets/Logo.png";
import {
  CheckoutLocation,
  HeaderContainer,
  HeaderIcon,
  Logo,
  MapIcon,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo COffe" />

      <CheckoutLocation>
        <HeaderIcon variant="primary">
          <MapIcon />
          <p>São Paulo, SP</p>
        </HeaderIcon>

        <HeaderIcon variant="secondary">
          <ShoppingCart size={22} weight="fill" />
        </HeaderIcon>
      </CheckoutLocation>
    </HeaderContainer>
  );
}

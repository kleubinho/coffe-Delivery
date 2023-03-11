import logo from "../../assets/Logo.png";
import {
  CheckoutLocation,
  HeaderContainer,
  HeaderIcon,
  Logo,
  MapIcon,
  ShoppingCartIcon,
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
          <div>
            <small>3</small>
          </div>
          <ShoppingCartIcon />
        </HeaderIcon>
      </CheckoutLocation>
    </HeaderContainer>
  );
}

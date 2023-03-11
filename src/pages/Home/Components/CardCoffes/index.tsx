import { ShoppingCart, Plus, Minus } from "phosphor-react";
import coffeDefault from "../../../../assets/Expresso.png";
import * as S from "./styles";

export function CardCoffe() {
  return (
    <S.Container>
      <S.CoffeImg src={coffeDefault} alt="" />

      <S.TypeCoffe>Tradicional</S.TypeCoffe>

      <h2>Expresso Tradicional</h2>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <S.AddCart>
        <p>
          <small>R$</small>9,90
        </p>

        <S.Cart>
          <Minus />
          <p>0</p>
          <Plus />
        </S.Cart>
        <S.ShoppingCartIcon />
      </S.AddCart>
    </S.Container>
  );
}

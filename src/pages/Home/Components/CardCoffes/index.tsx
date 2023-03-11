import { useState } from "react";
import { useTheme } from "styled-components";
import coffeDefault from "../../../../assets/Expresso.png";
import * as S from "./styles";

export function CardCoffe() {
  const [quantity, setQuantity] = useState(0);

  const lessQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const moreQuantity = () => {
    setQuantity(quantity + 1);
  };

  const theme = useTheme();
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

        <S.QuantityCart>
          <S.MinusIcon onClick={lessQuantity} />
          <p style={{ color: "#000" }}>{quantity}</p>
          <S.PlusIcon onClick={moreQuantity} />
        </S.QuantityCart>
        <S.BackgroundCart>
          <S.ShoppingCartIcon />
        </S.BackgroundCart>
      </S.AddCart>
    </S.Container>
  );
}

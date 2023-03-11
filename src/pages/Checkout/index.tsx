import { MapPinLine } from "phosphor-react";
import * as S from "./styles";

export function Checkout() {
  return (
    <S.ContainerForm>
      <div>
        <S.Title>Complete seu pedido</S.Title>

        <S.ContetentForm>
            <h2><MapPinLine/>Endereço de Entrega</h2>
            <span>Informe o endereço onde deseja receber seu pedido</span>
        </S.ContetentForm>
      </div>
    </S.ContainerForm>
  );
}

import { MapPinLine } from "phosphor-react";
import * as S from "./styles";

export function Checkout() {
  return (
    <S.ContainerForm>
      <S.Generic>
        <S.Title>Complete seu pedido</S.Title>

        <S.ContetentForm>
          <h2>
            <MapPinLine />
            Endereço de Entrega
          </h2>
          <span>Informe o endereço onde deseja receber seu pedido</span>

          <S.InputTable>
            <tr>
              <td>
                <input type="text" placeholder="CEP" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Rua" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Número" />
              </td>
              <td colSpan={1}>
                <input type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Bairro" />
              </td>
              <td>
                <input type="text" placeholder="Cidade" />
              </td>
              <td>
                <input type="text" placeholder="UF" />
              </td>
            </tr>
          </S.InputTable>
        </S.ContetentForm>
      </S.Generic>

      <S.Generic>
        <S.Title>Cafés selecionados</S.Title>
      </S.Generic>

      <S.ChoosePayMethod></S.ChoosePayMethod>
    </S.ContainerForm>
  );
}

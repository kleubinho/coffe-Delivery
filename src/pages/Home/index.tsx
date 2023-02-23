import { Title, ItemsCoffe } from "./styles";
import buySafe from "../../assets/icon.png";
import packaging from "../../assets/icon (1).png";
import delivery from "../../assets/icon (2).png";
import coffe from "../../assets/icon (3).png";

export function Home() {
  return (
    <ItemsCoffe>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div>
          <div>
            <img src={buySafe} alt="" />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <img src={delivery} alt="" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <img src={packaging} alt="" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <img src={coffe} alt="" />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <img src="../../assets/icon (3).png" alt="" />
    </ItemsCoffe>
  );
}

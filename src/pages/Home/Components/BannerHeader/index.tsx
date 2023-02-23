import { Title, ItemsCoffe, IconsCoffe, IconCoffe } from "./styles";
import buySafe from "../../../../assets/icon.png";
import packaging from "../../../../assets/icon (1).png";
import delivery from "../../../../assets/icon (2).png";
import coffe from "../../../../assets/icon (3).png";
import coffeBanner from "../../../../assets/coffe.png";

export function BannerHeader() {
    return (
        <ItemsCoffe>
      <div>
        <Title>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </Title>
        <p style={{ fontSize: "20px", marginBottom: 50 }}>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
          qualquer hora
        </p>

        <IconsCoffe>
          <IconCoffe>
            <img src={buySafe} alt="" />
            <span>Compra simples e segura</span>
          </IconCoffe>
          <IconCoffe>
            <img src={delivery} alt="" />
            <span>Embalagem mantém o café intacto</span>
          </IconCoffe>
          <IconCoffe>
            <img src={packaging} alt="" />
            <span>Entrega rápida e rastreada</span>
          </IconCoffe>
          <IconCoffe>
            <img src={coffe} alt="" />
            <span>O café chega fresquinho até você</span>
          </IconCoffe>
        </IconsCoffe>
      </div>
      <img src={coffeBanner} alt="" />
    </ItemsCoffe>
    )
}
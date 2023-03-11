import { BannerHeader } from "./Components/BannerHeader";
import { CardCoffe } from "./Components/CardCoffes";
import * as S from "./styles";

export function Home() {
  return (
    <div>
      <BannerHeader />

      <S.AllCoffes>
        <h1>Nossos cafés</h1>

        <S.CardsCoffe>
          <CardCoffe />
        </S.CardsCoffe>
      </S.AllCoffes>
    </div>
  );
}

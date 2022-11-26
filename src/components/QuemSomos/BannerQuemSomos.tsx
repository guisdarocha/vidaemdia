import * as S from "./BannerQuemSomos.style";
import Banner from "../../assets/img/Banner.png"
import Header from "../Header/index";

const BannerQuemSomos = () => {
  return (
      <>
        <Header />
        <S.BannerSection>
          <img src={Banner} alt="" />
          <h1>"Somos líderes em agilidade <br />
           e comprometimento"</h1>
        </S.BannerSection>
      </>

  )
}

export default BannerQuemSomos

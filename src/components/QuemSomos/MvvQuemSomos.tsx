import { HighLight } from "../HighLight/HighLight.style"
import * as S from "./MvvQuemSomos.style"
import Missao from "../../assets/img/ImgMissão.png"
import Visao from "../../assets/img/ImgVisão.png"
import Valores from "../../assets/img/ImgValores.png"

const MvvQuemSomos = () => {
  return (
      <>
        <S.MvvSection>
          <article className="col-4 text marginLeft">
            <div className="flexcel margin-">
              <HighLight>Missão</HighLight>
              <img className="img1" src={Missao} alt="Imagem de engrenagem" />
            </div>
            <div className="divText">
              <h3>Manter um padrão de agilidade, conforto e segurança na criação de  prontuário médico digital único e exclusivo para o paciente salvos na nuvem com maior proteção possível.</h3>
            </div>
          </article>
          <article className="col-4 text">
            <div className="flexcel margin-2">
              <HighLight>Visão</HighLight>
              <img src={Visao} alt="Imagem de olho" className="img2" />
            </div>
            <div className="divText">
              <h3>Se referência na criação de prontuário digital médico aprimorando nossa conexão com outras empresas parceiras e consumidores finais.</h3>
            </div>
          </article>
          <article className="col-4 text">
            <div className="flexcel">
              <HighLight>Valores</HighLight>
              <img src={Valores} alt="Imagem de diamante" className="img3" />
            </div>
            <div className="marginRight">
              <ul>
                <li>Empatia</li>
                <li>Praticidade</li>
                <li>Transparência</li>
              </ul>
            </div>
          </article>
        </S.MvvSection>
      </>

  )
}

export default MvvQuemSomos

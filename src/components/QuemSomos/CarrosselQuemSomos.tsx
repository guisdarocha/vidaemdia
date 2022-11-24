import { HighLight } from "../HighLight/HighLight.style";
import * as S from "./CarrosselQuemSomos.style";
import amanda from "../../assets/img/Amanda.png";
import pedro from "../../assets/img/Pedro.png";
import pietra from "../../assets/img/pietra.png";
import carlos from "../../assets/img/Carlos.png";

const CarroselQuemSomos = () => {
  return (
      <>
        <S.CarrosselSection>
          <div className="divHighlight">
            <HighLight className="highlight">O que falam sobre nós</HighLight>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="img-box">
                        <img src={amanda} alt=""/>
                      </div>
                      <p className="testimonial">“Eu adorei o Vida em Dia desde o primeiro dia que conheci, o atendimento do suporte é super humanizado, outras empresas deviam seguir este exemplo”</p>
                      <b className="name">Renata Liderbhergui</b>
                    </div>

                    <div className="item">
                      <div className="img-box"><img src={pedro} alt=""/></div>
                      <p className="testimonial">“Quero deixar aqui meu agradecimento a toda equipe que cuida da infraestrutura do site, pois saber que a probabilidade dos meus dados serem vazados é muito pequena. Meu muito obrigado”
                      </p>
                      <b className="name">Clóvis Damaceno</b>
                    </div>

                    <div className="item">
                      <div className="img-box"><img src={pietra} alt=""/></div>
                      <p className="testimonial">“Já experimentei outros serviços similares a estes, mas poder ter um prontuário médico digital onde posso atualizar em tempo real onde quer que eu esteja com a certeza”.
                      </p>
                      <b className="name">Pietra Liz</b>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </S.CarrosselSection>
      </>

  )
};

export default CarroselQuemSomos

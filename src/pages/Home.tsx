import Section from "../components/section";
import Article from "../components/Article/Article"
import { Footer } from "../components/Footer/Footer"
import { LoginModal } from "../components/Modal/LoginModal";
import HighLight from "../components/HighLight/HighLight";
import Parceiros from "../components/Parceiros/Parceiros";
import { RegisterModal } from "../components/Modal/RegisterModal";
import Header from "../components/Header";
import { Cards } from "./Home.style";




type HomeProps = {

}

const Home = (props: HomeProps) => {
  return (

    <>
    <Header />
      <div className="container">
        <Section  />
          <HighLight text="Confira nossos artigos"/>
          <Cards className="d-flex justify-content-around">
              <Article
              number="1"
              text="Prontuário online: Entenda como é e como funciona"
              resume="Com o avanço da tecnologia na área da saúde, redes públicas e particulares estão aderindo ao novo..."
              />
              <Article
              number="2"
              text="Documento online abre novas possiblidades para área da saúde"
              resume="Com o avanço da tecnologia na área da saúde, redes públicas e particulares estão aderindo ao novo..."
              />
          </Cards>
        <Parceiros  />
      </div>
      {/* <LoginModal/> */}
      {/* <RegisterModal/> */}
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home

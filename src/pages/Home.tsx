import Section from "../components/section";
import Article from "../components/Article/Article"
import { Footer } from "../components/Footer/Footer"
import { LoginModal } from "../components/Modal/LoginModal";
import HighLight from "../components/HighLight/HighLight";
import Parceiros from "../components/Parceiros/Parceiros";
import { RegisterModal } from "../components/Modal/RegisterModal";
import Header from "../components/Header";


type HomeProps = {

}

const Home = (props: HomeProps) => {
  return (

    <>
    <Header />
      <div className="container">
        <Section  />
        <HighLight text="Confira nossos artigos"/>
        <Article  />
        <HighLight text="Nossos parceiros"/>
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

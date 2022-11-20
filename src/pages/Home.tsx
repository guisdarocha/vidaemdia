import Section from "../components/section";
import Article from "../components/Article/Article"
import { Footer } from "../components/Footer/Footer"
import HighLight from "../components/HighLight/HighLight";
import Parceiros from "../components/Parceiros/Parceiros";


type HomeProps = {

}

const Home = (props: HomeProps) => {
  return (

    <>
    {/* navbar */}
      <div className="container">
        <Section  />
        <HighLight text="Confira nossos artigos"/>
        <Article  />
        <HighLight text="Nossos parceiros"/>
        <Parceiros  />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home

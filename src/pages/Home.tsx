import Section from "../components/section";
import Article from "../components/Article/Article"
import { Footer } from "../components/Footer/Footer"
import HighLight from "../components/HighLight/HighLight";


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
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home

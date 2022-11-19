import Section from "../components/section";
import Article from "../components/Article/Article"
import { Footer } from "../components/Footer/Footer"

type HomeProps = {

}

const Home = (props: HomeProps) => {
  return (
    
    <>
    {/* navbar */}
      <div className="container">
        <Section  />
        <Article  />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home

import Article from "../components/Article"

type HomeProps = {

}

const Home = (props: HomeProps) => {
  return (
    <>
    <div>navbar</div>
      <div className="container">
        <Article  />
      </div>
    <div>footer</div>
    </>
  )
}

export default Home

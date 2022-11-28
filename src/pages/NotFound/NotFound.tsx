import { memo } from "react";
import { Footer } from "../../components/Footer/Footer";
import Header from '../../components/Header/'
import notfound from '../../assets/img/404.svg'
import { NotFoundStyle } from "./NotFoundStyle";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
        <div className="container">
          <NotFoundStyle className="404">
            <img src={notfound} alt="lobo" />
            <h1>Ooops... Essa página não existe.</h1>
            <Link to="/" className="botao">Voltar</Link>
          </NotFoundStyle>
        </div>
      <Footer/>
    </>
  )
}

export default memo(NotFound)

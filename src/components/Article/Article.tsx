import { ArticleCard } from './Article.style'
import barra from "../../assets/barracinza.png"

type ArticleProps = {}

function Article({}: ArticleProps) {

  return (
        <ArticleCard className='row justify-content-around gy-5'>
          <div className="bg1 col-lg-6 card mx-1">
            <div>
              <div>
                <h3>Prontuário online: Entenda como é e como funciona</h3>
                <img src={barra} alt="barra horizontal" />
              </div>
                <div>
                  <h4>com o avanço da tencologia na área da saúde, redes públicas e particulares estão aderindo ao novo...</h4>
                  <p className='readlink'>ler mais</p>
                </div>
              </div>
            </div>

            <div className="bg2 col-lg-6 card">
            <div>
              <div>
                <h3>documento online abre novas possiblidades para área da saúde</h3>
                <img src={barra} alt="barra horizontal" />
              </div>
            <div>
                <h4>com o avanço da tencologia na área da saúde, redes públicas e particulares estão aderindo ao novo...</h4>
                <p className='readlink'>ler mais</p>
            </div>
            </div>

            </div>
        </ArticleCard>
  )
}

export default Article

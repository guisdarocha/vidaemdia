import { ArticleCard } from './Article.style'

type ArticleProps = {}

function Article({}: ArticleProps) {

  return (
        <ArticleCard className='row justify-content-between g-5'>
          <div className="bg1 col-lg-6 card">
            <div>
              <div>
                <h3>documento online abre novas possiblidades para área da saúde <span><br/>----------</span></h3>
              </div>
            <div>
                <h4>com o avanço da tencologia na área da saúde, redes públicas e particulares estão aderindo ao novo...</h4>
            </div>
            </div>
              <div className='readlink'>
                <p>ler mais</p>
              </div>
            </div>

            <div className="bg2 col-lg-6 card">
            <div>
              <div>
                <h3>documento online abre novas possiblidades para área da saúde <span><br/>----------</span></h3>
              </div>
            <div>
                <h4>com o avanço da tencologia na área da saúde, redes públicas e particulares estão aderindo ao novo...</h4>
            </div>
            </div>
              <div className='readlink'>
                <p>ler mais</p>
              </div>
            </div>
        </ArticleCard>
  )
}

export default Article

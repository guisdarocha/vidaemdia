import { ArticleCard } from './Article.style'

type ArticleProps = {}

function Article({}: ArticleProps) {

  return (
        <ArticleCard className='row justify-content-between'>
          <div className="bg col-md-6">
            <div>
              <div>
                <h3>documento online abre novas possiblidades para área da saúde <span><br/>______</span></h3>
              </div>
            <div>
                <h4>com o avanço da tencologia na área da saúde, redes públicas e particulares estão aderindo ao novo...</h4>
            </div>
            </div>
              <div>
              <p>ler mais</p>
              </div>
            </div>

            <div className="bg col-md-6">
            <div>
              <div>
                <h3>documento online abre novas possiblidades para área da saúde <span><br/>______</span></h3>
              </div>
            <div>
                <h4>com o avanço da tencologia na área da saúde, redes públicas e particulares estão aderindo ao novo...</h4>
            </div>
            </div>
              <div>
              <p>ler mais</p>
              </div>
            </div>
        </ArticleCard>
  )
}

export default Article

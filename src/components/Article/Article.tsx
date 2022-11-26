import { ArticleCard } from './Article.style'
import barra from "../../assets/barracinza.png"

type ArticleProps = {
  text: string,
  resume: string,
  number: string
}

function Article({text, resume, number}: ArticleProps) {

  return (
        <ArticleCard className='row justify-content-around cardnormal'>
          <div className={'bg'+number}>
            <div>
              <div>
                <h3>{text}</h3>
                <img src={barra} alt="barra horizontal" />
              </div>
                <div>
                  <h4>{resume}</h4>
                  <div className='readlink'>
                    <p>ler mais</p>
                  </div>
                </div>
              </div>
            </div>
        </ArticleCard>
  )
}

export default Article

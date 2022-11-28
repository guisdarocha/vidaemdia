import { HighLight } from "../HighLight/HighLight.style";
import * as S from "./QuemSomosText.style";
import imgRoom from "../../assets/img/ImgRoom.png";

const QuemSomosText = () => {
  return (
      <>
        <S.QuemSomosSection>
            <div className="text">
                <HighLight className="HighLight">Quem somos</HighLight>
                <h2 className="text1">Somos uma startup em expansão na área da saúde como foco na humanização e agilidades na formalização de prontuários digitais de pacientes objetivando a redução de espera no atendimento clínico em hospitais, clínicas e/ou laboratórios otimizando assim o tempo no recebimento, armazenamento e leitura de dados do paciente em seu prontuário online.
                </h2>
                <h2 className="text2">É claro que as startups se caracterizam como empresas que entraram há pouco no mercado. Por isso, nos comprometemos a criar soluções e inovações que realmente impactem no seu ecossistema. Só que, nesse caso, o objetivo é apoiar a rede médica e os pacientes nas suas atividades.
                </h2>
                <h2 className="desfoque">“Com os avanços tecnológicos pelos quais estamos constantemente passando, praticamente todos os setores do mercado se viram obrigados a adotar algumas adaptações — incluindo o da saúde. Uma das novidades que foi introduzida ao segmento foi o prontuário online, que surgiu para trazer mais facilidade e aumentar a segurança.”
                </h2>
                <h3>
                  Fonte:<a href="https://tdsa.com.br/blog/prontuario-online-entenda-o-que-e-e-como-funciona/">TDSA Sistemas</a>
                </h3>
            </div>
            <div className=" imgcel">
                <img src={imgRoom} alt="Imagem de Sala" className="img" />
            </div>
        </S.QuemSomosSection>
      </>

  )
}

export default QuemSomosText

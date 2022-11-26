import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardConsulta from "../components/CardConsulta/CardConsulta"
import { TopSection } from "./Exames.style"
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"


type ExamesProps = {}

const Exames = (props: ExamesProps) => {
  return (
    <>
      <Header />
      <TopSection className="container d-flex mobile">
        <div>
          <BemVindo
            user={"Fernando Predes"}
            text={"Insira aqui os dados da  sua consulta"}
            subtext={"*Insira e edite os dados sobre a consulta que foi realizada"}
            />
        </div>
        <div className="d-flex align-items-end pb-5">
          <Button text="cadastrar"/>
        </div>
      </TopSection>

      <div className="container">
        {/* componente dos cards */}
        <CardConsulta
         id={1}
         date={(new Date()).toLocaleDateString('en-US',)}
         medicalSpecialties="Cardiologista"
         diagnosis="Sopro na válvula mitral"
         hospital="HCor - Associação Beneficente Síria"
         doctor="Dr. Luis Pacheco"
         comments="Preciso agendar o retorno com o médico e apresentar o resultado do     exame que está salvo no meu Drive."
         />
      </div>
      <Footer />
    </>
  )
}

export default Exames

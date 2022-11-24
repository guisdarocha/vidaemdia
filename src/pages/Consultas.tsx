import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardConsulta from "../components/CardConsulta/CardConsulta"
import { TopSection } from "./Exames.style"


type ExamesProps = {}

const Exames = (props: ExamesProps) => {
  return (
    <>
      {/* componente do topo */}
      <TopSection className="container d-flex mobile">
        <div>
          <BemVindo
            user={"Fernando Predes"}
            text={"Insira aqui os dados do seu exame"}
            subtext={"*Insira e edite os dados sobre o exame que foi realizado"}
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
    </>
  )
}

export default Exames

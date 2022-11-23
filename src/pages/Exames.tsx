import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardExame from "../components/CardExame/CardExame"
import { TopSection } from "./Exames.style"


type ExamesProps = {}

const Exames = (props: ExamesProps) => {
  return (
    <>
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
        <CardExame id={1} date={Date()}/>
      </div>
    </>
  )
}

export default Exames

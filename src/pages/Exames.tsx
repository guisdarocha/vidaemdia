import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"


type ExamesProps = {}

const Exames = (props: ExamesProps) => {
  return (
    <div className="container d-flex">
      <div>
        <BemVindo
          user={"Fernando Predes"}
          text={"Insira aqui os dados do seu exame"}
          subtext={"*Insira e edite os dados sobre o exame que foi realizado"}
          />
      </div>
      <div className="d-flex align-items-end pb-5">
        <Button text="teste"/>
      </div>
    </div>
  )
}

export default Exames

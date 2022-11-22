import BemVindo from "../components/BemVindo/BemVindo"


type ExamesProps = {}

const Exames = (props: ExamesProps) => {
  return (
    <div className="container">
      <div>
        <BemVindo
          user={"Fernando Predes"}
          text={"Cadastre seu Prontuário Digital"}
          subtext={"*Cadastre e edite seus dados relacionados a sua saúde, seus hábitos sociais e dados pessoais."}
          />
      </div>

    </div>
  )
}

export default Exames

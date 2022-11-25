import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardExame from "../components/CardExame/CardExame"
import { Footer } from "../components/Footer/Footer"
import Header from '../components/Header'
import { TopSection } from "./Exames.style"


type MeuProntuarioProps = {
  name: string,
	email: string,
  password: string,
	birthDate: string,
	telephone: string,
	maritalStatus: string,
	sex: string,
	weight: string,
	height: string,
	zipCode: string,
	address: string,
	number:  string,
	neighborhood:  string,
	complement:  string,
	state:  string,
	city:  string,
	smoke:  string,
	drugs:  string,
	exercises: string,
	recreation:  string,
	familialDisease:  string,
	treatment: string,
	allergy: string,
  pregnant: string,
	medicines: string,
	disease: string,
	bloodType: string,
	status: boolean	
};

const meuProntuario = (props: MeuProntuarioProps) => {
  return (
    <>
      <Header/>
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
        <CardExame
         id={1}
         date={(new Date()).toLocaleDateString('en-US',)}
         exam="Eletrocardiograma"
         diagnosis="Sopro na válvula mitral"
         clinic="HCor - Associação Beneficente Síria"
         doctor="Dr. Luis Pacheco"
         comments="Preciso agendar o retorno com o médico e apresentar o resultado do     exame que está salvo no meu Drive."
         />
      </div>
      <Footer />
    </>
  )
}

export default meuProntuario

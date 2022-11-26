import axios from "axios"
import { useEffect, useState } from "react"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardExame from "../components/CardExame/CardExame"
import { Footer } from "../components/Footer/Footer"
import Header from '../components/Header'
import { TopSection } from "./Exames.style"


type ExamesProps = {}

const Exames = (props: ExamesProps) => {
  const [exames, setExames] = useState([])

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  async function getAllExams() {
    return await axios.get(`https://prontuario-digital-production-ff54.up.railway.app/exam/${ID}`, {
        headers: {
          Authorization: `Bearer ${USUARIO}`
        }
      }
    ).then(response => {
      setExames(response.data)
      console.log(exames)
    });
  }

  useEffect(() => {
    getAllExams()

  }, [])


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

export default Exames

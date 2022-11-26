import axios from "axios"
import { useEffect, useState } from "react"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CadastroExame from "../components/CadastroExame/CadastroExame"
import CardExame from "../components/CardExame/CardExame"
import { Footer } from "../components/Footer/Footer"
import Header from '../components/Header'
import { TopSection } from "./Exames.style"
import jwt_decode from "jwt-decode";
import api from "../api"


type ExamesProps = {
  decoded: Array<string>,
  date: string,
  diagnosis: string,
  idExams:number,
  exam:string,
  clinic: string,
  doctor: string,
  comments:string

}

const Exames = (props: ExamesProps) => {



  const [exames, setExames] = useState<ExamesProps[]>([])

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);
  console.log(decoded);

  async function getExames() {
    const { data } = await  api.get(`/exam/${ID}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })

    setExames(data)
    }

  useEffect(() => {
    getExames()

  }, [])


  return (
    <>
      <Header/>
      {/* componente do topo */}
      <TopSection className="container d-flex mobile">
        <div>
          <BemVindo
            user={decoded.name}
            text={"Aqui estão seus exames cadastrados:"}

            />
        </div>
        <div className="d-flex align-items-end pb-5">
          <Button text="cadastrar" link="/exames/cadastroexame"/>
        </div>
      </TopSection>

      <div className="container">
        {/* componente dos cards */}
        {exames.map((exame) => (<CardExame
         id={exame.idExams}
         date={exame.date}
         diagnosis={exame.diagnosis}
         exam={exame.exam}
         clinic={exame.clinic}
         doctor={exame.doctor}
         comments={exame.comments}
         />))}
      </div>
      <Footer />
    </>
  )
}

export default Exames

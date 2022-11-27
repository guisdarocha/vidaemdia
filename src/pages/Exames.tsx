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
import NenhumCadastrado from "../components/NenhumCadastrado/NenhumCadastrado"


export type ExamesProps = {
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

  let total = exames.length +1

  let data = exames.map((exame) => {
    return exame.date.slice(0, -14).replace(/-/g,'/')
  })
  console.log(data)



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
          <Button text="cadastrar" link="/exames/cadastroexame/"/>
        </div>

      </TopSection>
      {exames.length === 0 ?
        (
          <NenhumCadastrado nome='um exame.'/>
          )
        :
        (
          <div className="container">
            {exames.slice(0).reverse().map((exame, i) => (<CardExame
            index={total-=1}
            id={exame.idExams}
            date={data[i]}
            diagnosis={exame.diagnosis}
            exam={exame.exam}
            clinic={exame.clinic}
            doctor={exame.doctor}
            comments={exame.comments}
            />))}
          </div>
          )
        }

      <Footer />
    </>
  )
}

export default Exames

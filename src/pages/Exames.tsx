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
      <TopSection className="container d-flex mobile">
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
      </TopSection>
    </>
  )
}

export default Exames

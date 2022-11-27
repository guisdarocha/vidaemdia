import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import CardConsulta from "../components/CardConsulta/CardConsulta"
import { TopSection } from "./Exames.style"
import Header from '../components/Header'
import { Footer } from "../components/Footer/Footer"
import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import NenhumCadastrado from "../components/NenhumCadastrado/NenhumCadastrado"
import api from "../api"


export type ConsultasProps = {
  decoded: Array<string>,
  date: string,
  diagnosis: string,
  idAppointment:number,
  medicalSpecialties:string,
  hospital: string,
  doctor: string,
  comments:string

}

const Consultas = (props: ConsultasProps) => {

  const [consultas, setConsultas] = useState<ConsultasProps[]>([])

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  async function getConsultas() {
    const { data } = await  api.get(`/appointment/${ID}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })

    setConsultas(data)
    }

  useEffect(() => {
    getConsultas()

  }, [])

  let total = consultas.length +1

  let data = consultas.map((consulta) => {
    return consulta.date.slice(0, -14).replace(/-/g,'/')
  })




  return (
    <>
      <Header />
      <TopSection className="container d-flex mobile">
        <div>
          <BemVindo
            user={decoded.name}
            text={"Aqui estão todas as suas consultas:"}

            />
        </div>
        <div className="d-flex align-items-end pb-5">
        <Button text="cadastrar" link="/consultas/cadastroconsulta/"/>
        </div>
      </TopSection>

      {consultas.length === 0 ?
        (
          <NenhumCadastrado nome='uma consulta.'/>
          )
        :
        (
          <div className="container">
            {consultas.slice(0).reverse().map((consulta, i) => (<CardConsulta
            key={consulta.idAppointment}
            index={total-=1}
            id={consulta.idAppointment}
            date={data[i]}
            diagnosis={consulta.diagnosis}
            hospital={consulta.hospital}
            doctor={consulta.doctor}
            comments={consulta.comments}
            medicalSpecialties={consulta.medicalSpecialties}
            />))}
          </div>
          )
        }
      <Footer />
    </>
  )
}

export default Consultas

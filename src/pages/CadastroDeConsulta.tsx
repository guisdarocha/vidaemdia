import React from 'react'
import Header from '../components/Header'
import { TopSection } from "./Exames.style"
import BemVindo from "../components/BemVindo/BemVindo"
import Button from "../components/Button/Button"
import jwt_decode from "jwt-decode";
import { Footer } from "../components/Footer/Footer"
import CadastroExame from '../components/CadastroExame/CadastroExame'
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../api/index";
import CadastroConsulta from '../components/CadastroConsulta/CadastroConsulta'



type ConsultaProps = {

}

const CadastroDeConsulta = (props: ConsultaProps) => {

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);



  return (
    <>
      <Header/>
      {/* componente do topo */}
      <TopSection className="container d-flex mobile">
        <div>
          <BemVindo
            user={decoded.name}
            text={"Aqui estão suas consultas cadastradas:"}
            />
        </div>
        <div className="d-flex align-items-end pb-5">

        </div>
      </TopSection>

      <div className="container">
        <CadastroConsulta  />
      </div>
      <Footer />
    </>
  )
}

export default CadastroDeConsulta

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
import CompEditarExame from '../components/CompEditarExame/CompEditarExame'
import CompEditarConsulta from '../components/CompEditarConsulta/CompEditarConsulta'




type ConsultasProps = {

}

const CadastroDeConsultas = (props: ConsultasProps) => {

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);


  return (
    <>
      <Header/>
      <TopSection className="container d-flex mobile">
        <div>
          <BemVindo
            user={decoded.name}
            text={"Insira aqui os dados da sua consulta"}
            subtext={"*Insira e edite os dados sobre a consulta que foi realizada"}
            />
        </div>
        <div className="d-flex align-items-end pb-5">

        </div>
      </TopSection>

      <div className="container">
        <CompEditarConsulta />
      </div>
      <Footer />
    </>
  )
}

export default CadastroDeConsultas

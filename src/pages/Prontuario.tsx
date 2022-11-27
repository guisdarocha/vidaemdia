import React from 'react'
import BemVindo from '../components/BemVindo/BemVindo'
import { ProntuarioForm } from '../components/ProntuarioForm/ProntuarioForm'
import jwt_decode from "jwt-decode";

type ProntuarioProps = {}

const Prontuario = (props: ProntuarioProps) => {

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  return (
    <div className='container'>
      <BemVindo
        user={decoded.name}
        text={"Cadastre seu Prontuário Digital"}
        subtext={"*Cadastre e edite seus dados relacionados a sua saúde, seus hábitos sociais e dados pessoais."}
        />
      <ProntuarioForm />
      
    </div>
  )
}

export default Prontuario

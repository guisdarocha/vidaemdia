import React from 'react'
import BemVindo from '../components/BemVindo/BemVindo'
import { ProntuarioForm } from '../components/ProntuarioForm/ProntuarioForm'

type ProntuarioProps = {}

const Prontuario = (props: ProntuarioProps) => {
  return (
    <div className='container'>
      <BemVindo
        user={"Fernando Predes"}
        text={"Cadastre seu Prontuário Digital"}
        subtext={"*Cadastre e edite seus dados relacionados a sua saúde, seus hábitos sociais e dados pessoais."}
        />
      <ProntuarioForm />
      
    </div>
  )
}

export default Prontuario

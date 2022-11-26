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




type ExameProps = {

}

const CadastroDeExame = (props: ExameProps) => {

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
            text={"Insira aqui os dados do seu exame"}
            subtext={"*Insira e edite os dados sobre o exame que foi realizado"}
            />
        </div>
        <div className="d-flex align-items-end pb-5">

        </div>
      </TopSection>

      <div className="container">
        <CompEditarExame />
      </div>
      <Footer />
    </>
  )
}

export default CadastroDeExame

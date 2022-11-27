import { propTypes } from "react-bootstrap/esm/Image"
import BemVindo from "../components/BemVindo/BemVindo"
import { Footer } from "../components/Footer/Footer"
import Header from '../components/Header'
import bloodtype from "../assets/icons/bloodtype.png"
import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import NenhumCadastrado from "../components/NenhumCadastrado/NenhumCadastrado"
import api from "../api"
import { Dados } from "./MeuProntuario.style"



type MeuProntuarioProps = {
  name: string,
	email: string,
	birthDate: string,
	telephone: string,
	maritalStatus: string,
	sex: string,
	weight: string,
	height: string,
	zipCode: string,
	address: string,
	number:  string,
	neighborhood:  string,
	complement:  string,
	state:  string,
	city:  string,
	smoke:  string,
	drugs:  string,
	exercises: string,
	recreation:  string,
	familialDisease:  string,
	treatment: string,
	allergy: string,
  pregnant: string,
	medicines: string,
	disease: string,
	bloodType: string,

};


export const MeuProntuarioRealizado = ({
  name, email, birthDate, telephone, maritalStatus, sex, weight, height, zipCode, address,
  number, neighborhood, complement, state, city, smoke, drugs, exercises, recreation, familialDisease,
  treatment, allergy, pregnant, medicines, disease, bloodType}: MeuProntuarioProps) => {

    const [prontuario, setProntuario] = useState<MeuProntuarioProps>({} as MeuProntuarioProps)

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  async function getProntuario() {
    const { data } = await  api.get(`/users/${ID}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })

    setProntuario(data)

    }

  useEffect(() => {
    getProntuario()

  }, [])

console.log(prontuario)
  return (
    <>
      <Header />
      <>
        <Dados className="container">
          <h2>Visualizar aqui seu Prontuário Digital</h2>
          <div className="dados">
            <h3>Dados Pessoais</h3>
            <div className="info">
              <div>
                <h5>Seu Nome</h5>
                <p>{prontuario.name}</p>
              </div>
            </div>

            <div className="info d-flex row">
              <div className="col-md-8 col-12">
                <h5>Email</h5>
                <p>{prontuario.email}</p>
              </div>

              <div className="col-md-4 col-12">
                <h5>Telefone</h5>
               <p>{prontuario.telephone}</p>
              </div>
            </div>

            <div className="info row">
              <div className="col-md-3 col-12">
                <h5>Data de Nascimento</h5>
                <p>{prontuario.birthDate}</p>
              </div>
              <div className="col-md-3 col-12">
                <h5>Estado Civil</h5>
                <p>{prontuario.maritalStatus}</p>
              </div>
              <div className="col-md-2 col-12">
                <h5>Sexo</h5>
                <p>{prontuario.sex}</p>
              </div>
              <div className="col-md-2 col-12">
                <h5>Peso</h5>
                <p>{prontuario.weight}</p>
              </div>
              <div className="col-md-2 col-12">
                <h5>Altura</h5>
                <p>{prontuario.height}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="endereço">
            <h3>Endereço</h3>
            <div className="info">
              <h5>CEP</h5>
              <p>{prontuario.zipCode} </p>
            </div>
            <div className="info row">
              <div className="col-md-9 col-12">
              <h5>Endereço</h5>
              <p>{prontuario.address}</p>
              </div>
              <div className="col-md-3 col-12">
                <h5>Número</h5>
                <p>{prontuario.number}</p>
              </div>
            </div>
            <div className="info">
              <h5>Bairro</h5>
              <p>{prontuario.neighborhood}</p>
            </div>
            <div className="info">
              <h5>Complemento</h5>
              <p>{prontuario.complement}</p>
            </div>
            <div className="info row">
              <div className="col-md-2 col-12">
                <h5>Estado</h5>
                <p>{prontuario.state}</p>
              </div>
              <div className="col-md-10 col-12">
                <h5>Cidade</h5>
                <p>{prontuario.city}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="historicoSocial">
            <h3>Histórico Social</h3>
            <div>
              <h5>Fumo:</h5>
              {prontuario.smoke}
            </div>
            <div>
              <h5>Drogas:</h5>
              {prontuario.drugs}
            </div>
            <div>
              <h5>Pratica exercícios?</h5>
              {prontuario.exercises}
            </div>
            <div>
              <h5>Pratica alguma recreação?</h5>
              {prontuario.recreation}
            </div>
            <div>
              <h5>Doença na familia?</h5>
              {prontuario.familialDisease}
            </div>
            <div>
              <h5>Esta fazendo algum tratamento?</h5>
              {prontuario.treatment}
            </div>
            <div>
              <h5>Faz uso de algum medicamento?</h5>
              {prontuario.medicines}
            </div>
            <div>
              <h5>É alergico a algum medicamento?</h5>
              {prontuario.allergy}
            </div>
            <div>
              <h5>Está grávida?</h5>
              {prontuario.pregnant}
            </div>
          </div>
          <hr />
          <div className="diagnósticos">
            <h3> Diagnósticos </h3>
            TAGGGGGGGGGGGGGGGGGGGGGGGGGGG {prontuario.disease}
          </div>
          <hr />
          <div className="tipoSanguineo">
            <h3> Tipo Sanguíneo </h3>
            <div>
              <img src={bloodtype} /> {prontuario.bloodType}
            </div>
            <hr className="mb-5" />
          </div>
        </Dados>
      </>
      <Footer />
    </>
  );
}

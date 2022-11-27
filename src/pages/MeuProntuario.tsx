import { propTypes } from "react-bootstrap/esm/Image"
import BemVindo from "../components/BemVindo/BemVindo"
import { Footer } from "../components/Footer/Footer"
import Header from '../components/Header'
import bloodtype from "../assets/icons/bloodtype.png"
import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import NenhumCadastrado from "../components/NenhumCadastrado/NenhumCadastrado"
import api from "../api"



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
        <div className="container">
          <h2>Visualizar aqui seu Prontuário Digital</h2>
          <div className="dados">
            <h3>Dados Pessoais</h3>
            <div>
              <h5>Seu Nome</h5>
              {prontuario.name}
            </div>
            <div>
              <h5>Email</h5>
              {prontuario.email}
            </div>
            <div>
              <h5>Telefone</h5>
              {prontuario.telephone}
            </div>
            <div>
              <h5>Data de Nascimento</h5>
              {prontuario.birthDate}
            </div>
            <div>
              <h5>Estado Civil</h5>
              {prontuario.maritalStatus}
            </div>
            <div>
              <h5>Sexo</h5>
              {prontuario.sex}
            </div>
            <div>
              <h5>Peso</h5>
              {prontuario.weight}
            </div>
            <div>
              <h5>Altura</h5>
              {prontuario.height}
            </div>
          </div>

          <div className="endereço">
            <h3>Endereço</h3>
            <div>
              <h5>CEP</h5>
              {prontuario.zipCode}
            </div>
            <div>
              <h5>Endereço</h5>
              {prontuario.address}
            </div>
            <div>
              <h5>Número</h5>
              {prontuario.number}
            </div>
            <div>
              <h5>Bairro</h5>
              {prontuario.neighborhood}
            </div>
            <div>
              <h5>Complemento</h5>
              {prontuario.complement}
            </div>
            <div>
              <h5>Cidade</h5>
              {prontuario.city}
            </div>
            <div>
              <h5>Estado</h5>
              {prontuario.state}
            </div>
          </div>

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

          <div className="diagnósticos">
            <h3> Diagnósticos </h3>
            TAGGGGGGGGGGGGGGGGGGGGGGGGGGG {prontuario.disease}
          </div>

          <div className="tipoSanguineo">
            <h3> Tipo Sanguíneo </h3>
            <div>
              <img src={bloodtype} /> {prontuario.bloodType}
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

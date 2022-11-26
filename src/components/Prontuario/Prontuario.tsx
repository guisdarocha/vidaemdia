import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProntuarioStyle } from './Prontuario.style';
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../api";
import bloodtype from "../../assets/icons/bloodtype.png"



type MyProntuarioProps = {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  telephone: string;
  maritalStatus: string;
  sex: string;
  weight: number,
  height: number,
  zipCode: string;
  address: string;
  number: string;
  neighborhood: string;
  complement: string;
  state: string;
  city: string;
  smoke: string;
  drugs: string;
  exercises: string;
  recreation: string;
  familialDisease: string;
  treatment: string;
  allergy: string;
  pregnant: string;
  medicines: string;
  disease: string;
  bloodType: string;
  status: true
};

export const MyProntuario = (props: MyProntuarioProps) => {
  return (
   <>
   <div>
    <h2>Visualizar aqui seu Prontuário Digital</h2>
      <div className="dados"> 
        <h3>Dados Pessoais</h3>
        <div>
          <h5>Seu Nome</h5>
          {props.name}
        </div>
        <div>
          <h5>Email</h5>
          {props.email}
        </div>
        <div>
          <h5>Telefone</h5>
          {props.telephone}
        </div>
        <div>
          <h5>Data de Nascimento</h5>
          {props.birthDate}
        </div>
        <div>
          <h5>Estado Civil</h5>
          {props.maritalStatus}
        </div>
        <div>
          <h5>Sexo</h5>
          {props.sex}
        </div>
        <div>
          <h5>Peso</h5>
          {props.weight}
        </div>
        <div>
          <h5>Altura</h5>
          {props.height}
        </div>
    </div>

    <div className="endereço"> 
        <h3>Endereço</h3>
        <div>
          <h5>CEP</h5>
          {props.zipCode}
        </div>
        <div>
          <h5>Endereço</h5>
          {props.address}
        </div>
        <div>
          <h5>Número</h5>
          {props.number}
        </div>
        <div>
          <h5>Bairro</h5>
          {props.neighborhood}
        </div>
        <div>
          <h5>Complemento</h5>
          {props.complement}
        </div>
        <div>
          <h5>Cidade</h5>
          {props.city}
        </div>
        <div>
          <h5>Estado</h5>
          {props.state}
        </div>
    </div>

    <div className="historicoSocial"> 
        <h3>Histórico Social</h3>
        <div>
          <h5>Fumo:</h5>
          {props.smoke}
        </div>
        <div>
          <h5>Drogas:</h5>
          {props.drugs}
        </div>
        <div>
         <h5>Pratica exercícios?</h5>
          {props.exercises}
        </div>
        <div>
          <h5>Pratica alguma recreação?</h5>
          {props.recreation}
        </div>
        <div>
         <h5>Doença na familia?</h5>
         {props.familialDisease}
        </div>
        <div>
          <h5>Esta fazendo algum tratamento?</h5>   
          {props.treatment} 
        </div>
        <div>
          <h5>Faz uso de algum medicamento?</h5>   
          {props.medicines}
        </div>
        <div>
          <h5>É alergico a algum medicamento?</h5>   
          {props.allergy}
        </div>
        <div>
          <h5>Está grávida?</h5>  
           {props.pregnant} 
        </div>
    </div>
    
    
    <div className="diagnósticos">
      <h3> Diagnósticos </h3>
        TAGGGGGGGGGGGGGGGGGGGGGGGGGGG {props.disease}    
    </div>

    <div className="tipoSanguineo">
      <h3> Tipo Sanguíneo </h3>
      <div>
      <img src={bloodtype} /> {props.bloodType}   
      </div> 
    </div>
</div>
</>   
  );
}

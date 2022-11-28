import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from "../Header";
import { ProntuarioStyle , Select } from './ProntuarioForm.style';
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../api";
import { useNavigate } from 'react-router-dom';



type ProntuarioFormProps = {};

type Inputs = {
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

const token = localStorage.getItem('token');
const id = localStorage.getItem('id');


export const ProntuarioForm = (props: ProntuarioFormProps) => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const submitInfos = () => {
      api.put(`/users/${id}`, {
        name: data.name,
        email: data.email,
        birthDate: data.birthDate,
        telephone: data.telephone,
        maritalStatus: data.maritalStatus,
        sex: data.sex,
        weight: Number(data.weight),
        height: Number(data.height),
        zipCode: data.zipCode,
        address: data.address,
        number: data.number,
        neighborhood: data.neighborhood,
        complement: data.complement,
        state: data.state,
        city: data.city,
        smoke: data.smoke,
        drugs: data.drugs,
        exercises: data.exercises,
        recreation: data.recreation,
        familialDisease: data.familialDisease,
        treatment: data.treatment,
        allergy: data.allergy,
        pregnant: data.pregnant,
        medicines: data.medicines,
        disease: data.disease,
        bloodType: data.bloodType,
        status: data.status
      },
        {
          headers:
            { 'Authorization': `Bearer ${token}` }
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    }
    submitInfos()
    setTimeout(() => navigate('/prontuario'), 2000)
  };

  return (
    <>
      <ProntuarioStyle onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-12 col-md-12 '>
            <label className='nome'>
              Seu nome<p className='obrigatorio'>*</p>
              <input {...register('name', { required: true })} placeholder="Nome Completo" />
            </label>
          </div>
        </div>

        <div className='row'>
          <div className="col ">
            <label className='email'>
              E-mail<p className='obrigatorio'>*</p>
              <input {...register('email', { required: true })} placeholder="seuemail@gmail.com" />
            </label>
          </div>
        </div>
        <div className='row'>
          <div className="col ">
            <label className='telefone'>
              Telefone<p className='obrigatorio'>*</p>
              <input {...register('telephone', { required: true })} placeholder="(00)0000-0000" />
            </label>
          </div>
        </div>
        <div className='row'>
          <div className="col-12 col-md-2 ">
            <label className='data'>
              Data de Nascimento<p className='obrigatorio'>*</p>
              <input {...register('birthDate', { required: true })} placeholder="mm/dd/yyyy" />
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='estadocivil bottom'>
              Estado Civil<p className='obrigatorio'>*</p>
              <Select {...register('maritalStatus', { required: true })} required>
                <option value="genero" hidden></option>
                <option value="masculino">Solteiro</option>
                <option value="feminino">Casado</option>
                <option value="naodizer">Viúvo</option>
                <option value="naodizer">União estável</option>
              </Select >
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='sexo bottom'>
              Sexo<p className='obrigatorio'>*</p>
              < Select {...register('sex', { required: true })} required>
                <option value="genero" hidden></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="naodizer">Prefiro não dizer</option>
              </ Select >
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='peso bottom'>
              Peso<p className='obrigatorio'>*</p>
              <input type='number' {...register('weight', { required: true })} placeholder="75kg" />
            </label>
          </div>
          <div className="col-12 col-md-2">
            <label className='altura bottom'>
              Altura<p className='obrigatorio'>*</p>
              <input type='number' {...register('height', { required: true })} placeholder="1,80m" />
            </label>
          </div>
        </div>

        {/* CEP, endereço, numero, bairro, estado e cidade */}
        <div className='row'>
          <div className="col-12">
            <label className='cep'>
              CEP<p className='obrigatorio'>*</p>
              <input {...register('zipCode', { required: true })} placeholder="Ex: 11111-000" />
            </label>
          </div>
          <div className="col-12">
            <label className='endereco'>
              Endereço<p className='obrigatorio'>*</p>
              <input {...register('address', { required: true })} placeholder="Rua do zé" />
            </label>
          </div>
          <div className="numero col-12">
            <label className='numero'>
              Número<p className='obrigatorio'>*</p>
              <input {...register('number', { required: true })} placeholder="123" />
            </label>
          </div>
          <div className="bairro col-12">
            <label className='bairro'>
              Bairro<p className='obrigatorio'>*</p>
              <input {...register('neighborhood', { required: true })} placeholder="Tupiniquim" />
            </label>
          </div>
          <div className="completo col-12">
            <label className='complemento'>
              Complemento
              <input {...register('complement')} placeholder="Perto da padaria" />
            </label>
          </div>
          <div className="estado col-6">
            <label className='estado'>
              Estado<p className='obrigatorio'>*</p>
              <input {...register('state', { required: true })} placeholder="RJ" />
            </label>
          </div>
          <div className="cidade col-6">
            <label className='cidade'>
              Cidade<p className='obrigatorio'>*</p>
              <input {...register('city', { required: true })} placeholder="Rio de Janeiro" />
            </label>
          </div>
        </div>


        {/* Histórico Social */}

        <h3> Histórico Social </h3>
    <div className="historicoSocial">
        <div>
          <label className='fumar '>
            Fumo:
            <div className='div-space col'>
              <input {...register('smoke')} className="radio" value='sim' type='radio' />
              <span> Sim </span>
              <input {...register('smoke')} className="radio" value='nao' type='radio' />
              <span> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='drogas'>
            Drogas:
            <div className='div-space col'>
              <input {...register('drugs')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('drugs')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='exercicios'>
            Pratica exercícios?
            <div className='div-space col'>
              <input {...register('exercises')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('exercises')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='recreacao'>
            Pratica alguma recreação?
            <div className='div-space col'>
              <input {...register('recreation')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('recreation')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='familia'>
            Doença na familia?
            <div className='div-space col'>
              <input {...register('familialDisease')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('familialDisease')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='tratamento'>
            Esta fazendo algum tratamento?
            <div className='div-space col'>
              <input {...register('treatment')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('treatment')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='medicamento'>
            Faz uso de algum medicamento?
            <div className='div-space col'>
              <input {...register('medicines')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('medicines')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='alergico'>
            É alergico a algum medicamento?
            <div className='div-space col'>
              <input {...register('allergy')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('allergy')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='gravida'>
            Está grávida?
            <div className='div-space col'>
              <input {...register('pregnant')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('pregnant')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
    </div>

   {/* Diagnósticos */}

  <h3> Diagnósticos </h3>
    <div className="row">
      <div className="col">
        <label className='diagnostico'>
          <div className="dado">
            <input value='Diabetes tipo 1'className='checkbox' type='checkbox' {...register('disease')} />
            Diabetes tipo 1
          </div>
          <div className="dado">
            <input value='Diabetes tipo 2' className='checkbox' type='checkbox' {...register('disease')} />
            Diabetes tipo 2
           </div>
          <div className="dado">
            <input value='Leucemia' className='checkbox' type='checkbox' {...register('disease')} />
            Leucemia
            </div>
          <div className="dado">
            <input value='Linfoma' className='checkbox'  type='checkbox' {...register('disease')} />
            Linfoma
            </div>
          <div className="dado">
            <input value='Covid-19' className='checkbox' type='checkbox' {...register('disease')} />
             Covid-19
            </div>
          <div className="dado">
            <input value='Burnout' className='checkbox' type='checkbox' {...register('disease')} />
             Burnout
            </div>
          <div className="dado">
            <input value='Depressão' className='checkbox'  type='checkbox' {...register('disease')} />
            Depressão
            </div>
          </label>
        </div>
        <div className="col">
          <label className='diagnosticoDois'>
          <div className="dado">
            <input value='TAG-Transtorno de Ansiedade Generalizada' className='checkbox' type='checkbox'{...register('disease')} />
             TAG
             <h5>(Transtorno de Ansiedade Generalizada)</h5>
            </div>
            <div className="dado">
            <input value='Depressão pós-parto' className='checkbox' type='checkbox' {...register('disease')} />
            Depressão <br /> pós-parto
            </div>
            <div className="dado">
            <input value='Labirintite' className='checkbox' type='checkbox' {...register('disease')} />
            Labirintite
            </div>
            <div className="dado">
            <input value='HIV' className='checkbox' type='checkbox' {...register('disease')} />
            HIV
            </div>
            <div className="dado">
            <input value='Dor no nervo ciático' className='checkbox' type='checkbox' {...register('disease')} />
            Dor no nervo ciático
            </div>
            <div className="dado">
            <input value='Anemia' className='checkbox' type='checkbox' {...register('disease')} />
            Anemia
            </div>
            <div className="dado">
            <input value='Dermatite' className='checkbox' type='checkbox' {...register('disease')} />
            Dermatite
            </div>
          </label>
        </div>
        <div className="col">
          <label className='diagnosticoTres'>
            <div className="dado">
            <input value='Nódulo pulmonar' className='checkbox' type='checkbox' {...register('disease')} />
            Nódulo pulmonar
            </div>
            <div className="dado">
            <input value='Gastrite' className='checkbox' type='checkbox' {...register('disease')} />
            Gastrite
            </div>
            <div className="dado">
            <input value='Cirrose' className='checkbox' type='checkbox' {...register('disease')} />
            Cirrose
            </div>
            <div className="dado">
            <input value='Alcoolismo' className='checkbox' type='checkbox' {...register('disease')} />
            Alcoolismo
            </div>
            <div className="dado">
            <input value='Alzheimer' className='checkbox' type='checkbox' {...register('disease')} />
            Alzheimer
            </div>
            <div className="dado">
            <input value='Aneurisma' className='checkbox' type='checkbox' {...register('disease')} />
            Aneurisma
            </div>
            <div className="dado">
            <input value='Asma' className='checkbox' type='checkbox' {...register('disease')} />
            Asma
            </div>
          </label>
        </div>
        <div className="col">
          <label className='diagnosticoQuatro'>
          <div className="dado">
            <input value='Bipolaridade' className='checkbox' type='checkbox' {...register('disease')} />
            Bipolaridade
            </div>
            <div className="dado">
            <input value='Borderline' className='checkbox' type='checkbox' {...register('disease')} />
            Bordeline
            </div>
            <div className="dado">
            <input value='Bulimia' className='checkbox' type='checkbox' {...register('disease')} />
            Bulimia
            </div>
            <div className="dado">
            <input value='Hepatite A' className='checkbox' type='checkbox' {...register('disease')} />
            Hepatite A
            </div>
            <div className="dado">
            <input value='Hepatite C' className='checkbox' type='checkbox' {...register('disease')} />
            Hepatite C
            </div>
            <div className="dado">
            <input value='Lúpus' className='checkbox' type='checkbox' {...register('disease')} />
            Lúpus
            </div>
            <div className="dado">
            <input value='Osteoporose' className='checkbox' type='checkbox' {...register('disease')} />
            Osteoporose
            </div>
          </label>
        </div>
      </div>


        {/* Tipo Sanguíneo */}

        <h3> Tipo Sanguíneo </h3>

        <div className="row">
          <label className='sanguineo d-flex align-items-center'>
            <input value='O+' type='radio' {...register('bloodType')} />
            <span> O + </span>
            <input value='B-' type='radio' {...register('bloodType')} />
            <span> B - </span>
            <input value='B+' type='radio' {...register('bloodType')} />
            <span> B + </span>
            <input value='A+' type='radio' {...register('bloodType')} />
            <span> A + </span>
            <input value='AB-' type='radio' {...register('bloodType')} />
            <span> AB - </span>
            <input value='AB+' type='radio' {...register('bloodType')} />
            <span> AB + </span>
            <input value='naosei' type='radio' {...register('bloodType')} />
            <span> Não sei </span>
          </label>
        </div>
        <label className='d-flex align-items-center'>
          <input className='termos' type="checkbox" {...register('status', {required:true})} />
          <span className='termos-span'>Aceito e estou de acordo com os termos de uso deste site, bem como o armazenamento dos meus dados pessoais confiando na total segurança e privacidade.</span>
        </label>
        <div className="row d-flex justify-content-center">
        <button type="submit" className="btn btn-primary enviar">ENVIAR</button>
        </div>
      </ProntuarioStyle>
    </>
  );
};

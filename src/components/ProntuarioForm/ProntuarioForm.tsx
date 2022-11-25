import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProntuarioStyle, BlueButton, Select } from './ProntuarioForm.style';
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../api";

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
	exercises:string;
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


export const ProntuarioForm = (props: ProntuarioFormProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = (data) => {
  event?.preventDefault()
  console.log(data);
}

  return (
    <>
      <ProntuarioStyle onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-12 col-md-12 '>
            <label className='nome'>
              Seu nome<p className='obrigatorio'>*</p>
              <input {...register('name', {required:true})} placeholder="Nome Completo" />
            </label>
          </div>
        </div>

        <div className='row'>
          <div className="col-12 col-md-6">
            <label className='email'>
              E-mail<p className='obrigatorio'>*</p>
              <input {...register('email', {required:true})} placeholder="seuemail@gmail.com" />
            </label>
          </div>
          <div className="col-12 col-md-6">
            <label className='telefone'>
              Telefone<p className='obrigatorio'>*</p>
              <input {...register('telephone', {required:true})} placeholder="(00)0000-0000" />
            </label>
          </div>
        </div>

        <div className='row'>
          <div className="col-12 col-md-2 ">
            <label className='data'>
              Data de Nascimento<p className='obrigatorio'>*</p>
              <input {...register('birthDate', {required:true})} placeholder="01/01/2022" />
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='estadocivil bottom'>
              Estado Civil<p className='obrigatorio'>*</p>
              <Select {...register('maritalStatus', {required:true})} required>
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
              < Select {...register('sex', {required:true})} required>
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
              <input {...register('weight', {required:true})} placeholder="75kg" />
            </label>
          </div>
          <div className="col-12 col-md-2">
            <label className='altura bottom'>
              Altura<p className='obrigatorio'>*</p>
              <input {...register('height', {required:true})} placeholder="1,80cm" />
            </label>
          </div>
        </div>
     
        {/* CEP, endereço, numero, bairro, estado e cidade */}
        <div className='row'>
          <div className="col-12">
            <label className='cep'>
              CEP<p className='obrigatorio'>*</p>
              <input {...register('zipCode', {required:true})}  placeholder="Ex: 11111-000" />
            </label>
          </div>
          <div className="col-8">
            <label className='endereco'>
              Endereço<p className='obrigatorio'>*</p>
              <input {...register('address', {required:true})} placeholder="Rua do zé" />
            </label>
          </div>
          <div className="numero col-4">
            <label className='numero'>
              Número<p className='obrigatorio'>*</p>
              <input {...register('number', {required:true})} placeholder="0123" />
            </label>
          </div>
          <div className="bairro col-12">
            <label className='bairro'>
              Bairro<p className='obrigatorio'>*</p>
              <input {...register('neighborhood', {required:true})} placeholder="Tupiniquim" />
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
              <input {...register('state', {required:true})} placeholder="RJ" />
            </label>
          </div>
          <div className="cidade col-6">
            <label className='cidade'>
              Cidade<p className='obrigatorio'>*</p>
              <input {...register('city', {required:true})} placeholder="Rio de Janeiro" />
            </label>
          </div>
        </div>
      
        
      {/* Histórico Social */}
     
        <h3> Histórico Social </h3>

        <div>
          <label className='fumar'>
            Fumo:
            <div className='div-space'>
              <input {...register('smoke')} className="radio" value='sim' type='radio' />
              <span className='alinhamento-y'> Sim </span>
              <input {...register('smoke')} className="radio" value='nao' type='radio' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='drogas'>
            Drogas:
            <div className='div-space'>
              <input {...register('drugs')} className="radio" value='sim' type='radio'/>
              <span className='alinhamento-y'> Sim </span>
              <input {...register('drugs')} className="radio" value='nao' type='radio'/>
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='exercicios'>
            Pratica exercícios?
            <div className='div-space'>
              <input {...register('exercises')} className="radio" value='sim' type='radio'/>
              <span className='alinhamento-y'> Sim </span>
              <input {...register('exercises')} className="radio" value='nao' type='radio'/>
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='recreacao'>
            Pratica alguma recreação?
            <div className='div-space'>
              <input {...register('recreation')} className="radio" value='sim' type='radio'/>
              <span className='alinhamento-y'> Sim </span>
              <input {...register('recreation')} className="radio" value='nao' type='radio'/>
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='familia'>
            Doença na familia?
            <div className='div-space'>
              <input {...register('familialDisease')} className="radio" value='sim' type='radio'/>
              <span className='alinhamento-y'> Sim </span>
              <input {...register('familialDisease')} className="radio" value='nao' type='radio'/>
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
            <div>
              <label className='tratamento'>
                Esta fazendo algum tratamento?
                <div className='div-space'>
                  <input {...register('treatment')} className="radio" value='sim' type='radio'/>
                  <span className='alinhamento-y'> Sim </span>
                  <input {...register('treatment')} className="radio" value='nao' type='radio'/>
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
            <div>
              <label className='medicamento'>
                Faz uso de algum medicamento?
                <div className='div-space'>
                  <input {...register('medicines')} className="radio" value='sim' type='radio'  />
                  <span className='alinhamento-y'> Sim </span>
                  <input {...register('medicines')} className="radio" value='nao' type='radio'  />
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
            <div>
              <label className='alergico'>
                É alergico a algum medicamento?
                <div className='div-space'>
                  <input {...register('allergy')} className="radio" value='sim' type='radio'  />
                  <span className='alinhamento-y'> Sim </span>
                  <input {...register('allergy')} className="radio" value='nao' type='radio'  />
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
            <div>
              <label className='gravida'>
                Está grávida?
                <div className='div-space'>
                  <input {...register('pregnant')} className="radio" value='sim' type='radio'/>
                  <span className='alinhamento-y'> Sim </span>
                  <input {...register('pregnant')} className="radio" value='nao' type='radio'/>
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
        

          {/* Diagnósticos */}
         
            <h3> Diagnósticos </h3>

            <div className="row-12">
              <label className='diagnostico'>
                <input value='Diabetes tipo 1' type='checkbox' {...register('disease')} />
                Diabetes tipo 1
                <input value='Diabetes tipo 2' type='checkbox' {...register('disease')} />
                Diabetes tipo 2
                <input value='Leucemia' type='checkbox' {...register('disease')} />
                Leucemia
                <input value='Linfoma' type='checkbox' {...register('disease')} />
                Linfoma
                <input value='Covid-19' type='checkbox' {...register('disease')} />
                Covid-19
                <input value='Burnout' type='checkbox' {...register('disease')} />
                Burnout
                <input value='Depressão' type='checkbox' {...register('disease')} />
                Depressão
              </label>
            </div>
            <div className="row-12">
              <label className='diagnosticoDois'>
                <input value='TAG-Transtorno de Ansiedade Generalizada' type='checkbox'{...register('disease')} />
                TAG<h5>(Transtorno de Ansiedade Generalizada)</h5>
                <input value='Depressão pós-parto' type='checkbox' {...register('disease')} />
                Depressão pós-parto
                <input value='Labirintite' type='checkbox' {...register('disease')} />
                Labirintite
                <input value='HIV' type='checkbox' {...register('disease')} />
                HIV
                <input value='Dor no nervo ciático' type='checkbox' {...register('disease')} />
                Dor no nervo ciático
                <input value='Anemia' type='checkbox' {...register('disease')} />
                Anemia
                <input value='Dermatite' type='checkbox' {...register('disease')} />
                Dermatite
              </label>
            </div>
            <div className="row-12">
              <label className='diagnosticoTres'>
                <input value='Nódulo pulmonar' type='checkbox' {...register('disease')} />
                Nódulo pulmonar
                <input value='Gastrite' type='checkbox' {...register('disease')} />
                Gastrite
                <input value='Cirrose' type='checkbox' {...register('disease')} />
                Cirrose
                <input value='Alcoolismo' type='checkbox' {...register('disease')} />
                Alcoolismo
                <input value='Alzheimer' type='checkbox' {...register('disease')} />
                Alzheimer
                <input value='Aneurisma' type='checkbox' {...register('disease')} />
                Aneurisma
                <input value='Asma' type='checkbox' {...register('disease')} />
                Asma
              </label>
            </div>
            <div className="row-12">
              <label className='diagnosticoQuatro'>
                <input value='Bipolaridade' type='checkbox' {...register('disease')} />
                Bipolaridade
                <input value='Borderline' type='checkbox' {...register('disease')} />
                Bordeline
                <input value='Bulimia' type='checkbox' {...register('disease')} />
                Bulimia
                <input value='Hepatite A' type='checkbox' {...register('disease')} />
                Hepatite A
                <input value='Hepatite C' type='checkbox' {...register('disease')} />
                Hepatite C
                <input value='Lúpus' type='checkbox' {...register('disease')} />
                Lúpus
                <input value='Osteoporose' type='checkbox' {...register('disease')} />
                Osteoporose
              </label>
            </div>
          

          {/* Tipo Sanguíneo */}
         
            <h3> Tipo Sanguíneo </h3>

            <div className="row-12">
              <label className='sanguineo'>
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
            <label>
              <input  type="checkbox" {...register('status')} />
              <span>Aceito blablabla os termos e blablablabla</span>
            </label>
            <button>ENVIAR</button>
          </ProntuarioStyle>
        </>
        );
};

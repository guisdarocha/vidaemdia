// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { ProntuarioStyle } from './ProntuarioForm.style';

type ProntuarioFormProps = {};

export const ProntuarioForm = (props: ProntuarioFormProps) => {
  return (
      <ProntuarioStyle >
        <div className='row'>
          <div className='col-12 col-md-12 '>
          <label className='nome'>
            Seu nome<p className='obrigatorio'>*</p>
            <input placeholder="Nome Completo" />
          </label>
          </div>
        </div>

        <div className='row'>
          <div className="col-12 col-md-6">
            <label className='email'>
              E-mail<p className='obrigatorio'>*</p>
              <input placeholder="seuemail@gmail.com" />
            </label>
          </div>
          <div className="col-12 col-md-6">
            <label className='telefone'>
              Telefone<p className='obrigatorio'>*</p>
              <input placeholder="(00)0000-0000" />
            </label>
         </div>
        </div>

        <div className='row'>
          <div className="col-12 col-md-2 ">
            <label className='data'>
              Data de Nascimento<p className='obrigatorio'>*</p>
              <input placeholder="01/01/2022" />
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='estadocivil bottom'>
              Estado Civil<p className='obrigatorio'>*</p>
              <input placeholder="Casado" />
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='sexo bottom'>
              Sexo<p className='obrigatorio'>*</p>
              <input placeholder="Masculino" />
            </label>
          </div>
          <div className="col-12 col-md-2 ">
            <label className='peso bottom'>
              Peso<p className='obrigatorio'>*</p>
              <input placeholder="75kg" />
            </label>
          </div>
          <div className="col-12 col-md-2">
            <label className='altura bottom'>
              Altura<p className='obrigatorio'>*</p>
              <input placeholder="1,80cm" />
            </label>
          </div>
        </div>



{/* CEP, endereço, numero, bairro, estado e cidade */}
        <div className='row'>
          <div className="col-3">
            <label className='cep'>
              CEP<p className='obrigatorio'>*</p>
              <input placeholder="Ex: 11111-000" />
            </label>
          </div>
          <div className="col-8">
            <label className='endereco'>
              Endereço<p className='obrigatorio'>*</p>
              <input placeholder="Rua do zé" />
            </label>
          </div>
          <div className="col-2">
            <label className='numero'>
              Número<p className='obrigatorio'>*</p>
              <input placeholder="0123" />
            </label>
          </div>
          <div className="col-6">
            <label className='bairro'>
              Bairro<p className='obrigatorio'>*</p>
              <input placeholder="Tupiniquim" />
            </label>
          </div>
          <div className="col-6">
            <label className='complemento'>
              Complemento
              <input placeholder="Perto da padaria" />
            </label>
          </div>
          <div className="col-6">
            <label className='estado'>
              Estado<p className='obrigatorio'>*</p>
              <input placeholder="RJ" />
            </label>
          </div>
          <div className="col-6">
            <label className='cidade'>
              Cidade<p className='obrigatorio'>*</p>
              <input placeholder="Rio de Janeiro" />
            </label>
          </div>
        </div> 
      </ProntuarioStyle>
      
  );
};

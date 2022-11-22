import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      </ProntuarioStyle>
  );
};

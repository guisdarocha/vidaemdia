import { ButtonSubmit } from "../Button/Button.styles";
import { CadastroExameStyle, AceiteTermos } from "./CadastroExame.style";



const CadastroExame = () => {
  return (
    <>
        <CadastroExameStyle>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='exame'>
                Exame
                <input placeholder="Digite aqui o nome do seu exame" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label typeof="date" className='data'>
                Data
                <input placeholder="__/__/__" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='diag'>
                Diagnóstico
                <input placeholder="Digite aqui seu diagnóstico" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='local'>
                Local
                <input placeholder="Local em que o exame foi feito" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='medico'>
                Médico Responsável
                <input placeholder="Nome do médico" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='obs'>
                Observação
                <textarea placeholder="Digite aqui as observações do seu exame" />
                </label>
            </div>
            </div>
            <div className="salvar">
              <ButtonSubmit >Salvar</ButtonSubmit>
            </div>
        </CadastroExameStyle>
        <AceiteTermos className="mb-5">
            <p className="termo"><input type="checkbox"  checked />Aceito e estou de acordo com o termos de uso deste site, bem como o armazenamento dos meus dados pessoais confiando na totla segurança e privacidade.</p>
        </AceiteTermos>

    </>
  )
}

export default CadastroExame

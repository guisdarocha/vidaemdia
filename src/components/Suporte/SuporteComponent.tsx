import Button from "../Button/Button"
import { AceiteTermos, CadastroExameStyle } from "../CadastroExame/CadastroExame.style"
import { SuporteStyle } from "./Suporte.style"

export const SuporteComponent = () => {
    return (
      <>
        <SuporteStyle>
            <div className="container divSuporte">
                <div>
                    <h1>Fale <b>Conosco</b></h1>
                    <h2>Preencha o formulário abaixo com seus dados</h2>
                </div>
                <CadastroExameStyle>
                    <div className='row'>
                    <div className='col-12 col-md-12 '>
                        <label className='exame'>
                        Seu Nome <p className='obrigatorio'>*</p>
                        <input  placeholder="Digite aqui seu nome" />
                        </label>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 col-md-12 '>
                        <label className='diag'>
                        Seu e-mail <p className='obrigatorio'>*</p>
                        <input  typeof="date"  placeholder="Digite aqui seu e-mail" />
                        </label>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 col-md-12 '>
                        <label className='obs'>
                        Assunto <p className='obrigatorio'>*</p>
                        <textarea placeholder="Digite aqui sua mensagem" />
                        </label>
                    </div>
                    </div>
                </CadastroExameStyle>
                <AceiteTermos className="mb-5">
                    <p className="termo"><input type="checkbox"  checked />Aceito e estou de acordo com o termos de uso deste site, bem como o armazenamento dos meus dados pessoais confiando na totla segurança e privacidade.</p>
                </AceiteTermos>
                <div className="salvar">
                    <Button link="/" text="Enviar"/>
                </div>
            </div>
        </SuporteStyle>
      </>
    )
  }

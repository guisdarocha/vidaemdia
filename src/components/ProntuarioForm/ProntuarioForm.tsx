import { ProntuarioStyle, BlueButton, Select } from './ProntuarioForm.style';

type ProntuarioFormProps = {};

export const ProntuarioForm = (props: ProntuarioFormProps) => {
  return (
    <>
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
              < Select name="sexo" required>
                <option value="genero" disabled selected hidden></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="naodizer">Prefiro não dizer</option>
              </ Select >
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

      <ProntuarioStyle>
        {/* CEP, endereço, numero, bairro, estado e cidade */}
        <div className='row'>
          <div className="col-12">
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
          <div className="numero col-4">
            <label className='numero'>
              Número<p className='obrigatorio'>*</p>
              <input placeholder="0123" />
            </label>
          </div>
          <div className="bairro col-12">
            <label className='bairro'>
              Bairro<p className='obrigatorio'>*</p>
              <input placeholder="Tupiniquim" />
            </label>
          </div>
          <div className="completo col-12">
            <label className='complemento'>
              Complemento
              <input placeholder="Perto da padaria" />
            </label>
          </div>
          <div className="estado col-6">
            <label className='estado'>
              Estado<p className='obrigatorio'>*</p>
              <input placeholder="RJ" />
            </label>
          </div>
          <div className="cidade col-6">
            <label className='cidade'>
              Cidade<p className='obrigatorio'>*</p>
              <input placeholder="Rio de Janeiro" />
            </label>
          </div>
        </div>
      </ProntuarioStyle>

      {/* Histórico Social */}
      <ProntuarioStyle>
        <h3> Histórico Social </h3>

        <div>
          <label className='fumar'>
            Fumo:
            <div className='div-space'>
              <input className="radio" value='sim' type='radio' name='fumar' />
              <span className='alinhamento-y'> Sim </span>
              <input className="radio" value='nao' type='radio' name='fumar' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='drogas'>
            Drogas:
            <div className='div-space'>
              <input className="radio" value='sim' type='radio' name='drogas' />
              <span className='alinhamento-y'> Sim </span>
              <input className="radio" value='nao' type='radio' name='drogas' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='alcool'>
            Álcool
            <div className='div-space'>
              <input className="radio" value='sim' type='radio' name='alcool' />
              <span className='alinhamento-y'> Sim </span>
              <input className="radio" value='nao' type='radio' name='alcool' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='exercicios'>
            Pratica exercícios?
            <div className='div-space'>
              <input className="radio" value='sim' type='radio' name='exercicios' />
              <span className='alinhamento-y'> Sim </span>
              <input className="radio" value='nao' type='radio' name='exercicios' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='recreacao'>
            Pratica alguma recreação?
            <div className='div-space'>
              <input className="radio" value='sim' type='radio' name='recreacao' />
              <span className='alinhamento-y'> Sim </span>
              <input className="radio" value='nao' type='radio' name='recreacao' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
        <div>
          <label className='familia'>
            Doença na familia?
            <div className='div-space'>
              <input className="radio" value='sim' type='radio' name='familia' />
              <span className='alinhamento-y'> Sim </span>
              <input className="radio" value='nao' type='radio' name='familia' />
              <span className='alinhamento-y'> Não </span>
            </div>
          </label>
        </div>
            <div>
              <label className='tratamento'>
                Esta fazendo algum tratamento?
                <div className='div-space'>
                  <input className="radio" value='sim' type='radio' name='tratamento' />
                  <span className='alinhamento-y'> Sim </span>
                  <input className="radio" value='nao' type='radio' name='tratamento' />
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
            <div>
              <label className='medicamento'>
                Faz uso de algum medicamento?
                <div className='div-space'>
                  <input className="radio" value='sim' type='radio' name='medicamento' />
                  <span className='alinhamento-y'> Sim </span>
                  <input className="radio" value='nao' type='radio' name='medicamento' />
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
            <div>
              <label className='alergico'>
                É alergico a algum medicamento?
                <div className='div-space'>
                  <input className="radio" value='sim' type='radio' name='alergico' />
                  <span className='alinhamento-y'> Sim </span>
                  <input className="radio" value='nao' type='radio' name='alergico' />
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
            <div>
              <label className='gravida'>
                Está grávida?
                <div className='div-space'>
                  <input className="radio" value='sim' type='radio' name='gravida' />
                  <span className='alinhamento-y'> Sim </span>
                  <input className="radio" value='nao' type='radio' name='gravida' />
                  <span className='alinhamento-y'> Não </span>
                </div>
              </label>
            </div>
          </ProntuarioStyle>

          {/* Diagnósticos */}
          <ProntuarioStyle>
            <h3> Diagnósticos </h3>

            <div className="row-12">
              <label className='diagnostico'>
                <input value='sim' type='checkbox' name='diabetesUm' />
                Diabetes tipo 1
                <input value='sim' type='checkbox' name='diabetesDois' />
                Diabetes tipo 2
                <input value='sim' type='checkbox' name='leucemia' />
                Leucemia
                <input value='sim' type='checkbox' name='linfoma' />
                Linfoma
                <input value='sim' type='checkbox' name='covid' />
                Covid-19
                <input value='sim' type='checkbox' name='burnout' />
                Burnout
                <input value='sim' type='checkbox' name='depressao' />
                Depressão
              </label>
            </div>
            <div className="row-12">
              <label className='diagnosticoDois'>
                <input value='sim' type='checkbox' name='tag' />
                TAG<h5>(Transtorno de Ansiedade Generalizada)</h5>
                <input value='sim' type='checkbox' name='depressaoParto' />
                Depressão pós-parto
                <input value='sim' type='checkbox' name='Labirintite' />
                Labirintite
                <input value='sim' type='checkbox' name='hiv' />
                HIV
                <input value='sim' type='checkbox' name='ciatico' />
                Dor no nervo ciático
                <input value='sim' type='checkbox' name='gravida' />
                Anemia
                <input value='sim' type='checkbox' name='dermatite' />
                Dermatite
              </label>
            </div>
            <div className="row-12">
              <label className='diagnosticoTres'>
                <input value='sim' type='checkbox' name='noduloPulmonar' />
                Nódulo pulmonar
                <input value='sim' type='checkbox' name='gastrite' />
                Gastrite
                <input value='sim' type='checkbox' name='cirrose' />
                Cirrose
                <input value='sim' type='checkbox' name='alcoolismo' />
                Alcoolismo
                <input value='sim' type='checkbox' name='alzheimer' />
                Alzheimer
                <input value='sim' type='checkbox' name='aneurisma' />
                Aneurisma
                <input value='sim' type='checkbox' name='asma' />
                Asma
              </label>
            </div>
            <div className="row-12">
              <label className='diagnosticoQuatro'>
                <input value='sim' type='checkbox' name='bipolaridade' />
                Bipolaridade
                <input value='sim' type='checkbox' name='bordeline' />
                Bordeline
                <input value='sim' type='checkbox' name='Bulimia' />
                Bulimia
                <input value='sim' type='checkbox' name='hepatiteA' />
                Hepatite A
                <input value='sim' type='checkbox' name='hepatiteC' />
                Hepatite C
                <input value='sim' type='checkbox' name='lupus' />
                Lúpus
                <input value='sim' type='checkbox' name='osteoporose' />
                Osteoporose
              </label>
            </div>
          </ProntuarioStyle>

          {/* Tipo Sanguíneo */}
          <ProntuarioStyle>
            <h3> Tipo Sanguíneo </h3>

            <div className="row-12">
              <label className='sanguineo'>
                <input value='o+' type='radio' name='gravida' />
                <span> O + </span>
                <input value='b-' type='radio' name='gravida' />
                <span> B - </span>
                <input value='b+' type='radio' name='gravida' />
                <span> B + </span>
                <input value='a+' type='radio' name='gravida' />
                <span> A + </span>
                <input value='ab-' type='radio' name='gravida' />
                <span> AB - </span>
                <input value='ab+' type='radio' name='gravida' />
                <span> AB + </span>
                <input value='naosei' type='radio' name='gravida' />
                <span> Não sei </span>
              </label>
            </div>
          </ProntuarioStyle>

          {/* Vacinas Covid */}
          <ProntuarioStyle>
            <h3> Vacina contra a COVID-19 </h3>

            <div className="row-12">
              <label className='diagnostico'>
                <input value='sim' type='checkbox' name='primeiraDose' />
                Primeira Dose
                <input value='sim' type='checkbox' name='segundaDose' />
                Segunda Dose
                <input value='sim' type='checkbox' name='primeiraDoseReforco' />
                Primeira Dose de Reforço
                <input value='sim' type='checkbox' name='segundaDoseReforco' />
                Segunda Dose de Reforço
              </label>
            </div>

          </ProntuarioStyle>
        </>
        );
};

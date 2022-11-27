import { ButtonSubmit } from "../Button/Button.styles";
import { CadastroExameStyle, AceiteTermos } from "./CadastroExame.style";
import { useForm, SubmitHandler } from "react-hook-form";
import api from "../../api"
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from "react-router-dom";

type Inputs = {
  date: string,
  medicalSpecialties: string,
  hospital: string,
  doctor: string,
  comments: string,
  diagnosis: string,

}

const CompEditarConsulta = () => {
  const navigate = useNavigate()

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);
  const finalId = decoded.idUser

  const { id } = useParams();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const submitInfos = () => {
      api.put(`/appointment/${finalId}/${id}`, {
        medicalSpecialties: data.medicalSpecialties,
        date: data.date,
        diagnosis: data.diagnosis,
        hospital: data.hospital,
        doctor: data.doctor,
        comments: data.comments,

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
    setTimeout(() => navigate('/consultas'), 1000)

  };
  console.log(decoded)

  return (
    <>
        <CadastroExameStyle onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='exame'>
                Especialidade
                <input {...register('medicalSpecialties', { required: true })} placeholder="Digite aqui a especialidade" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label typeof="date" className='data'>
                Data
                <input {...register('date', { required: true })} typeof="date"  placeholder="__/__/__" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='diag'>
                Diagnóstico
                <input {...register('diagnosis', { required: true })} placeholder="Digite aqui seu diagnóstico" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='local'>
                Local
                <input {...register('hospital', { required: true })} placeholder="Local em que o exame foi feito" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='medico'>
                Médico Responsável
                <input {...register('doctor', { required: true })} placeholder="Nome do médico" />
                </label>
            </div>
            </div>
            <div className='row'>
            <div className='col-12 col-md-12 '>
                <label className='obs'>
                Observação
                <textarea {...register('comments', { required: true })} placeholder="Digite aqui as observações do seu exame" />
                </label>
            </div>
            </div>
            <div className="salvar">
              <ButtonSubmit  >Salvar</ButtonSubmit>
            </div>
        </CadastroExameStyle>
        <AceiteTermos className="mb-5">
            <p className="termo"><input type="checkbox"  checked />Aceito e estou de acordo com o termos de uso deste site, bem como o armazenamento dos meus dados pessoais confiando na totla segurança e privacidade.</p>
        </AceiteTermos>

    </>
  )
}

export default CompEditarConsulta

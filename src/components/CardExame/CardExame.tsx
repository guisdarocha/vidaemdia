import React, { useEffect, useState } from 'react'
import { Card } from './CardExameStyle'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api'
import jwt_decode from "jwt-decode";
import { ExamesProps } from '../../pages/Exames'

type CardProps = {
  id: number,
  date: string,
  exam: string,
  clinic: string,
  doctor: string,
  comments: string,
  diagnosis: string,
  index: number
}

const CardExame = ({id, date, exam, clinic, doctor, comments, diagnosis, index}:CardProps) => {

  const [exames, setExames] = useState<ExamesProps[]>([])

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  const navigate = useNavigate()

  async function getExames() {
    const { data } = await  api.get(`/exam/${ID}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
    setExames(data)
    }

  useEffect(() => {
    getExames()

  }, [])

  async function deleteExames() {
    await  api.delete(`/exam/${ID}/${id}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
      setTimeout(() => navigate('/'), 1000)
    }



  return (
    <Card>
      <div className='d-flex justify-content-between align-items-center topo'>
        <h3>exame {index} </h3>
        <div className='d-flex '>
          <h4>data: <p>{date}</p></h4>
          <Link className='icone' to={`/exames/editarexame/${id}`}><img src={lapis} alt="icone de lápis" /></Link>
          <button className='icone'onClick={deleteExames}><img  src={lata} alt="icone de lata" /></button>
        </div>
      </div>
      <div className='linha'>
        <h4>Exame:<p>{exam}</p></h4>
      </div>
      <div className='linha'>
        <h4>Diagnóstico: <p>{diagnosis}</p></h4>
      </div>
      <div className='linha'>
        <h4>Local: <p>{clinic}</p></h4>
      </div>
      <div className='linha'>
        <h4>Médico responsável:<p>{doctor}</p></h4>
      </div>
      <div className='linha'>
        <h4>Observação:<h5>{comments}</h5></h4>
      </div>
    </Card>
  )
}

export default CardExame

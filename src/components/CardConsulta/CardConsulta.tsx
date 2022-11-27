import React, { useEffect, useState } from 'react'
import { Card } from './CardConsultaStyle'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api'
import jwt_decode from "jwt-decode";
import {ConsultasProps}  from '../../pages/Consultas'

type CardProps = {
  id: number,
  date: string,
  medicalSpecialties: string,
  hospital: string,
  doctor: string,
  comments: string,
  diagnosis: string,
  index: number
}

const CardConsulta = ({id, date, medicalSpecialties, hospital, doctor, comments, diagnosis, index}:CardProps) => {

  const [consultas, setConsultas] = useState<ConsultasProps[]>([])

  const USUARIO = localStorage.getItem('token');
  const ID = localStorage.getItem('id');

  const token = USUARIO;
  const decoded : any = jwt_decode(token!);

  const navigate = useNavigate()

  async function getConsultas() {
    const { data } = await  api.get(`/appointment/${ID}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
    setConsultas(data)
    }

  useEffect(() => {
    getConsultas()

  }, [])

  async function deleteConsultas() {
    await  api.delete(`/appointment/${ID}/${id}`,{
      headers: {
        Authorization: `Bearer ${USUARIO}`
      }
    })
      setTimeout(() => navigate('/'), 1000)
    }



  return (
    <Card>
      <div className='d-flex justify-content-between align-items-center topo'>
        <h3>Consulta {index} </h3>
        <div className='d-flex '>
          <h4>data: <p>{date}</p></h4>
          <Link className='icone' to={`/exames/editarconsulta/${id}`}><img src={lapis} alt="icone de lápis" /></Link>
          <button className='icone'onClick={deleteConsultas}><img  src={lata} alt="icone de lata" /></button>
        </div>
      </div>
      <div className='linha'>
        <h4>Especialidade:<p>{medicalSpecialties}</p></h4>
      </div>
      <div className='linha'>
        <h4>Diagnóstico: <p>{diagnosis}</p></h4>
      </div>
      <div className='linha'>
        <h4>Local: <p>{hospital}</p></h4>
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

export default CardConsulta

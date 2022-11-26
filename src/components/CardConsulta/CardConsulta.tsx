import React from 'react'
import { Card } from './CardConsultaStyle'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link } from 'react-router-dom'

type CardProps = {
  id: number,
  date: string,
  medicalSpecialties: string,
  hospital: string,
  doctor: string,
  comments: string,
  diagnosis: string
}

const CardConsulta = ({id, date, medicalSpecialties, hospital, doctor, comments, diagnosis}:CardProps) => {




  return (
    <Card>
      <div className='d-flex justify-content-between align-items-center topo'>
        <h3>Consulta {id} </h3>
        <div className='d-flex '>
          <h4>data: <p>{date}</p></h4>
          <Link className='icone' to={"#"}><img src={lapis} alt="icone de lápis" /></Link>
          <Link className='icone' to={"#"}><img  src={lata} alt="icone de lata" /></Link>
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

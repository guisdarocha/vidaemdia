import React from 'react'
import { Card } from './CardExameStyle'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link } from 'react-router-dom'

type CardProps = {
  id: number,
  date: string,
  exam: string,
  clinic: string,
  doctor: string,
  comments: string,
  status: string
}

const CardExame = ({id, date, exam, clinic, doctor, comments, status}:CardProps) => {




  return (
    <Card>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>exame {id} </h3>
        <div className='d-flex'>
          <h4>data: <p>{date}</p></h4>
          <Link className='icone' to={"#"}><img src={lapis} alt="icone de lápis" /></Link>
          <Link className='icone' to={"#"}><img  src={lata} alt="icone de lata" /></Link>
        </div>
      </div>
      <div className='linha'>
        <h4>Exame:<p>{exam}</p></h4>
      </div>
      <div className='linha'>
        <h4>Diagnóstico: <p>{status}</p></h4>
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

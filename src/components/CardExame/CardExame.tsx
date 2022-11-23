import React from 'react'
import { Card } from './CardExameStyle'
import lata from '../../assets/lata.svg'
import lapis from '../../assets/pencil.svg'
import { Link } from 'react-router-dom'

type CardProps = {
  id: number,
  date: Date,
  exam: string,
  clinic: string,
  doctor: string,
  comments: string
}

const CardExame = ({id, date, exam, clinic, doctor, comments}:CardProps) => {
  return (
    <Card>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>exame {id} </h3>
        <div>
          <Link to={"#"}><img src={lapis} alt="icone de lápis" /></Link>
          <Link className='lata' to={"#"}><img  src={lata} alt="icone de lata" /></Link>
        </div>
      </div>

      <div>
        <h4>Exame:<p>{exam}</p></h4>
        
      </div>
      <div></div>
      <div></div>
      <div></div>
    </Card>
  )
}

export default CardExame

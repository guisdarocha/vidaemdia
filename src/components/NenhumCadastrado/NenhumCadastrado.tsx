import React from 'react'
import { NenhumStyle } from './NenhumCadastrado.Style'
import easteregg from '../../assets/img/easteregg.svg'


type Props = {
  nome: string
}

const NenhumCadastrado = ({nome}: Props) => {
  return (
    <NenhumStyle className='container '>
      <img src={easteregg} alt="lobo bolado" />
      <h1>Você ainda não cadastrou {nome}</h1>
    </NenhumStyle>
  )
}

export default NenhumCadastrado

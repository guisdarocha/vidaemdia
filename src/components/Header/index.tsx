
import logo from '../../assets/images/logo-header.png'
import avatar from '../../assets/icons/avatar.png'
import burguer from '../../assets/icons/burguer-menu.png'
import React from 'react'
import { HeaderStyle, LinkStyle } from './Header.style'
import { Link } from 'react-router-dom'



const index = () => {
  return (
    <HeaderStyle className='d-flex justify-content-around align-items-center'>
      <div><img src={logo} alt="logo" /></div>
      <div className='links'>
        <LinkStyle to="#">Home</LinkStyle>
        <LinkStyle to="#">Quem somos</LinkStyle>
        <LinkStyle to="#">Meus Exames</LinkStyle>
        <LinkStyle to="#">Minhas Consultas</LinkStyle>
        <LinkStyle to="#">Suporte</LinkStyle>
        <LinkStyle to="#">Acesse</LinkStyle>
        <img src={avatar} alt="" />
      </div>
    </HeaderStyle>
  )
}

export default index

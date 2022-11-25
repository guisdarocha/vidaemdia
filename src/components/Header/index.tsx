
import logo from '../../assets/images/logo-header.png'
import avatar from '../../assets/icons/avatar.png'
import burguer from '../../assets/icons/burguer-menu.png'
import React from 'react'
import { HeaderStyle, LinkStyle, Menu } from './Header.style'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const index = () => {

  const [active, setMode] = useState(false)
  const toggleMode = () =>{
    setMode(!active)
  }

  return (
    <>
    <Menu className="Menu">
      <div className={active ? 'icon iconActive': 'icon'} onClick={toggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className="list">
          <ul className="listItems">
            <Link to='/'><li>Home</li></Link>
            <Link to="/quemsomos"><li>Quem somos</li></Link>
            <Link to="/exames"><li>Meus Exames</li></Link>
            <Link to="/consultas"><li>Minhas Consultas</li></Link>
            <Link to='#'><li>Suporte</li></Link>
            <Link to='#'><li>Acesse</li></Link>
          </ul>
        </div>
      </div>
    </Menu>
      <HeaderStyle className='d-flex justify-content-around align-items-center'>
        <div><img src={logo} alt="logo" /></div>
        <div className='links'>
          <LinkStyle className='linksin' to="/">Home</LinkStyle>
          <LinkStyle className='linksin' to="/quemsomos">Quem somos</LinkStyle>
          <LinkStyle className='linksin' to="/exames">Meus Exames</LinkStyle>
          <LinkStyle className='linksin' to="/consultas">Minhas Consultas</LinkStyle>
          <LinkStyle className='linksin' to="#">Suporte</LinkStyle>
          <LinkStyle className='linksin' to="#">Acesse</LinkStyle>
          <img src={avatar} alt="" />
        </div>
      </HeaderStyle>
    </>
  )
}

export default index

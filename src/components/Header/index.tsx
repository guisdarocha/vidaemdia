import BurguerMenu from "../../assets/icons/burguer-menu.png"
import NavLink from "../Link"
import LinkMenu from "../LinkMenu"
import LinkMenu2 from "../LinkMenu2"
import Logo from "../../assets/images/logo-header.png.png"
import Search from "../../assets/icons/search2.png"
import Avatar from "../../assets/icons/avatar.png"
import { useState } from "react"
import "./styles.css"
import { LoginModal } from "../Modal/LoginModal"
import {RegisterModal } from "../Modal/RegisterModal"

function Header() {
   const [modal, setModal] = useState('')
   
   const openLoginModal = () => {
      setModal('login')
   };

   const openRegisterModal = () => {
      setModal('register')
   };

    return (
     <>
    <header className="barraheader">
      <div className="bar">
      <img className="logo" src={Logo} alt="" />
      <div className="navcomponent">
      <img className="burguer-menu" src={BurguerMenu} alt="" /> 
      <div className="navbar"> 
      <nav className="nav">
         <NavLink texto="Home" redirect="/"/>
         <NavLink texto="Quem Somos" redirect="#"/>
         <NavLink texto="Meu prontuário" redirect="/prontuario"/>
         <NavLink texto="Suporte" redirect="#"/>
         <NavLink onClick={openLoginModal} texto="Login" />
      </nav>
      <img className="search" src={Search} alt="" />
      <img className="avatar" src={Avatar} alt="" />
      </div>
      </div>     
      </div>
      <div className="submenu">
         <LinkMenu texto="Home" redirect="/cursos"/>
         <LinkMenu texto="Quem somos" redirect="/blog"/>
         <LinkMenu texto="Meu prontuário" redirect="/contato"/>
         <LinkMenu texto="Suporte" redirect="/cursos"/>
         <LinkMenu texto="Acesse" redirect="/blog"/>
      </div> 
      <div className="submenu2">
         <LinkMenu2 texto="Editar" redirect="/editar"/>
         <LinkMenu2 texto="Visualizar" redirect="/visualizar"/> 
      </div>   
    </header>
     {modal === 'login' && <LoginModal onClick={openRegisterModal}/>}
     {modal === 'register' && <RegisterModal/>} 
    </>
    );
}

export default Header;
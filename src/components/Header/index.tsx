import BurguerMenu from "../../assets/icons/burguer-menu.png"
import Link from "../Link"
import LinkMenu from "../LinkMenu"
import LinkMenu2 from "../LinkMenu2"
import Logo from "../../assets/images/logo-header.png.png"
import Search from "../../assets/icons/search2.png"
import Avatar from "../../assets/icons/avatar.png"

import "./styles.css"

function Header() {
    return (<header className="container">
      <div className="bar">
      <img className="logo" src={Logo} alt="" />
      <div className="navcomponent">
      <img className="burguer-menu" src={BurguerMenu} alt="" />
      
      
      <div className="navbar">
      
   
    
      <nav className="nav">
         <Link texto="Home" redirect="/cursos"/>
         <Link texto="Quem Somos" redirect="/blog"/>
         <Link texto="Meu prontuário" redirect="/contato"/>
         <Link texto="Suporte" redirect="/cursos"/>
         <Link texto="Acesse" redirect="/blog"/>
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
    );
}

export default Header;
import "./menuPerfil.css"
import {BsHouseDoor, BsQuestion} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {GoFile} from 'react-icons/go';
import {BiExit} from 'react-icons/bi';
import { NavLink } from "react-router-dom";


export function MenuPerfil({mostrar}){
    function Logout(){
        //Borra el localStorage
        
        localStorage.clear();
        console.log("Saliendo...");
        window.location.href="/"
    } 
    return(<div className="menu-perfil" style={mostrar ? {display:"block"} : {display:"none"}}>
        <ul className="lista">
            <li  className="opcion-menu">
                <BsHouseDoor className="icon ico"/>
               <NavLink to="/usuarioLog" style={{color: "white", textDecoration: 'none' }}><span>Inicio</span></NavLink> 
            </li> 
            <li className="opcion-menu">
                <AiOutlineUser className="icon ico"/>
        
                <NavLink to="/VistaUsuario" style={{color: "white", textDecoration: 'none' }}><span>Mi perfil</span></NavLink>
            </li>
            <li className="opcion-menu">
                <BsQuestion className="icon ico"/>
                <NavLink to="/PeticionesUsuarios" style={{color: "white", textDecoration: 'none' }}><span>Hacer petición</span></NavLink>
                
            </li>
            <li className="opcion-menu">
                <GoFile className="icon ico"/>
                <NavLink to="/misPeticiones" style={{color: "white", textDecoration: 'none' }}><span>Mis peticiones</span></NavLink>
                
            </li>
            <li className="opcion-menu opc-cerrar-sesion">
                <BiExit className="icon ico"/>
                <NavLink  onClick={Logout} style={{color: "white", textDecoration: 'none' }} ><span>Cerrar sesión</span></NavLink>
            </li>
        </ul>
        
    </div>);
}
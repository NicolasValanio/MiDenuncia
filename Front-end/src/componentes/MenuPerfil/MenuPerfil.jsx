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
               <NavLink to="/usuarioLog"><span>Inicio</span></NavLink> 
            </li> 
            <li className="opcion-menu">
                <AiOutlineUser className="icon ico"/>
        
                <NavLink to="/VistaUsuario"><span>Mi perfil</span></NavLink>
            </li>
            <li className="opcion-menu">
                <BsQuestion className="icon ico"/>
                <NavLink to="/PeticionesUsuarios"><span>Hacer petición</span></NavLink>
                
            </li>
            <li className="opcion-menu">
                <GoFile className="icon ico"/>
                <NavLink to="/"><span>Mis peticiones</span></NavLink>
                
            </li>
            <li className="opcion-menu opc-cerrar-sesion">
                <BiExit className="icon ico"/>
                <NavLink onClick={Logout}><span>Cerrar sesión</span></NavLink>
            </li>
        </ul>
        
    </div>);
}
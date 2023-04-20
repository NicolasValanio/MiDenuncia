import "./menuPerfil.css"
import {BsHouseDoor, BsQuestion} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';
import {GoFile} from 'react-icons/go';
import {BiExit} from 'react-icons/bi';


export function MenuPerfil({mostrar}){
    return(<div className="menu-perfil" style={mostrar ? {display:"block"} : {display:"none"}}>
        <ul className="lista">
            <li className="opcion-menu">
                <BsHouseDoor className="icon ico"/>
                <span>Inicio</span>
            </li>
            <li className="opcion-menu">
                <AiOutlineUser className="icon ico"/>
                <span>Mi perfil</span>
                
            </li>
            <li className="opcion-menu">
                <BsQuestion className="icon ico"/>
                <span>Hacer petición</span>
            </li>
            <li className="opcion-menu">
                <GoFile className="icon ico"/>
                <span>Mis peticiones</span>
            </li>
            <li className="opcion-menu opc-cerrar-sesion">
                <BiExit className="icon ico"/>
                <span>Cerrar sesión</span>
            </li>
        </ul>
        
    </div>);
}
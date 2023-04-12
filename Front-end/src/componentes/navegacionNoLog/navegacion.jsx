import React from "react";
import style from './navegacion.module.css';
import { IoMegaphoneOutline } from 'react-icons/io5';
import {RiLoginBoxFill} from "react-icons/ri"
import {BsPersonFillAdd} from "react-icons/bs"


function NavegacionNoLog() {

    return(
        <div className={style.contenedor}>
            <div className={style.imagen}></div>
            
            <div className={style.contenedorBtns}>
            <a href="/Login" className={`${style.btns} `}  title="¡Has tu primera petición!"> <IoMegaphoneOutline className={style.icon}/> </a>
            <a href="/RegistroUsuario" className={`${style.btns} ${style.LetraRegistro}`}>Registrarse</a>
            <a href="/RegistroUsuario" className={`${style.btns} ${style.registro}`} title="Registrarse"> <BsPersonFillAdd className={style.icon}/> </a>
            <a href="/Login" className={`${style.btns} ${style.LetraLogin}`}>Iniciar Sesi&oacute;n</a>
            <a href="/Login" className={`${style.btns} ${style.log}`} title="Iniciar Sesión"> <RiLoginBoxFill className={style.icon}/> </a>
            </div>
        </div>
    )
}

export  default NavegacionNoLog;
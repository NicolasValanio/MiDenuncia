import React from "react";
import style from './navegacion.module.css';
import { IoMegaphoneOutline } from 'react-icons/io5';


function NavegacionNoLog() {

    return(
        <div className={style.contenedor}>
            <div className={style.imagen}></div>
            
            <div className={style.contenedorBtns}>
            <a href="/Login" className={style.denuncia}> <IoMegaphoneOutline className={style.iconoDenuncia}/> </a>
            <a href="/RegistroUsuario" className={style.btns}>Registrarse</a>
            <a href="/Login" className={style.btns}>Iniciar Sesi&oacute;n</a>
            </div>
        </div>
    )
}

export  default NavegacionNoLog;
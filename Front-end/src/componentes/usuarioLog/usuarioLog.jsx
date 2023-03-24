import React from "react";
import style from '../usuarioLog/usuarioLog.module.css'

import { Link,useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";



function UsuarioLog() {
    return (
        <div className={`contenedor ${style.usuario_log}`}>
            <div className={`contenedor ${style.navLog}`}>
                <div className={`contenedor ${style.cont_left}`}>
                    <div className={style.logo}></div>
                </div>
                <div className={`contenedor ${style.cont_Right}`}>
                    <ul className={`contenedor ${style.listaBoton}`}>
                        <li className={style.li} ><Link  to="/"> <IoMdNotifications className={style.iconsLog}/> </Link></li>
                        <li className={style.li}><Link  to="/"> <VscSettings className={style.iconsLog}/> </Link></li>
                        <li className={style.li}><Link  to="/vistaUsuario"> <FaUserCircle className={style.iconsLog} /> </Link></li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.filtrar}`}>
                
            </div>
            <div className={`contenedor ${style.cont_tarjetas}`}>
                
                

            </div>
        </div>
    )
}

export default UsuarioLog;
import React from "react";
import style from '../usuarioLog/usuarioLog.module.css'
import FiltrarPor from "../filtrarPor/filtarPor";

import { Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { AiFillAlert } from "react-icons/ai";
import { BsSignStopFill, BsFillSignNoParkingFill } from "react-icons/bs";
import { MdPark } from "react-icons/md";
import { GiStreetLight } from "react-icons/gi";
import { MdOutlineRecycling } from "react-icons/md";


function UsuarioLog(params) {
    return (
        <div className={`contenedor ${style.usuario_log}`}>
            <div className={`contenedor ${style.navLog}`}>
                <div className={`contenedor ${style.cont_left}`}>
                    <div className={style.logo}></div>
                </div>
                <div className={`contenedor ${style.cont_Right}`}>
                    <ul className={`contenedor ${style.listaBoton}`}>

                        <li className={style.li} >
                            <div className={style.a} to="/"> <IoMdNotifications className={style.iconsLog}/></div>
                            <ul className={`contenedor ${style.despegableNotificaion} ${style.li}`}>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li> 
                            </ul>
                        </li>

                        <li className={style.li}>
                            <div className={style.a} to="/"> <VscSettings className={style.iconsLog}/></div>
                            <ul className={`contenedor ${style.despegableFiltro} ${style.li}`}>
                                <li className={style.liFiltrados} > <AiFillAlert /> Seguridad  </li>
                                <li className={style.liFiltrados} > <BsSignStopFill /> Malla Vial </li>
                                <li className={style.liFiltrados} > <BsFillSignNoParkingFill     /> Señalización Vial </li>
                                <li className={style.liFiltrados} > <MdPark /> Espacios Públicos </li>
                                <li className={style.liFiltrados} > <GiStreetLight /> Alumbrado Público  </li>
                                <li className={style.liFiltrados} > <MdOutlineRecycling /> Contaminación Ambiental </li>
                                 
                            </ul>
                        </li>
                        
                        <li className={style.li}><Link className={style.a} to="http://localhost:4000/logout"> <FaUserCircle className={style.iconsLog} /> </Link></li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.filtrar}`}>
                <FiltrarPor/>
            </div>
            <div className={`contenedor ${style.cont_tarjetas}`}>
                
                

            </div>
        </div>
    )
}

export default UsuarioLog;
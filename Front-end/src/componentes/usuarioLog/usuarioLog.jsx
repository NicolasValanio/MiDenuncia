import React, {useState, useRef, useEffect} from "react";
import style from '../usuarioLog/usuarioLog.module.css'
import FiltrarPor from "../filtrarPor/filtarPor";
import Footer from "../footer/footer.jsx"

import { Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { AiFillAlert } from "react-icons/ai";
import { BsSignStopFill, BsFillSignNoParkingFill } from "react-icons/bs";
import { MdPark } from "react-icons/md";
import { GiStreetLight } from "react-icons/gi";
import { MdOutlineRecycling } from "react-icons/md";
import {GoMegaphone} from "react-icons/go";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import TarjetasPublicacion from "../tarjetasPublicacion/tarjetasPublicacion";



function UsuarioLog(params) {
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          notificationRef.current &&
          !notificationRef.current.contains(event.target)
        ) {
          setShowNotifications(false);
        }
      }
  
      // Agregar un manejador de eventos al documento para cerrar las notificaciones al hacer clic fuera del botón
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [notificationRef]);
  
    function toggleNotifications() {
      setShowNotifications(!showNotifications);
    }
  
    return (
        <div className={`contenedor ${style.usuario_log}`}>
            <div className={`contenedor ${style.navLog}`}>
                <div className={` ${style.cont_left}`}>
                    <div className={style.logo}></div>
                </div>
                <div className={`contenedor ${style.cont_Right}`}>
                    <ul className={`contenedor ${style.listaBoton}`}>
                    
                    <li className={style.li} title="¡Publica una nueva petición!"><Link className={style.a} to="/PeticionesUsuarios"><GoMegaphone className={`icon ${style.iconsLog}`}/></Link></li>
                    <li className={style.li} >
                        <div className={style.a} onClick={toggleNotifications}> <IoMdNotifications className={`icon ${style.iconsLog}`}/></div>
                        {showNotifications && (
                            <ul className={`contenedor ${style.despegableNotificaion} ${style.li}`} ref={notificationRef}>
                                <li>Se ha publicado su petición con éxito</li>
                                <li>@Luis16 ha apoyado tu petición</li>
                                <li>@Luis16 ha comentado tu petición</li>
                            </ul>
                        )}
                    </li>

                        <li className={`${style.li} ${style.notificaciones}`}>
                            <div className={style.a} to="/"> <VscSettings className={`icon ${style.iconsLog}`}/></div>
                            <ul className={`contenedor ${style.despegableFiltro} ${style.li}`}>
                                <li className={style.liFiltrados} > <AiFillAlert /> Seguridad  </li>
                                <li className={style.liFiltrados} > <BsSignStopFill /> Malla Vial </li>
                                <li className={style.liFiltrados} > <BsFillSignNoParkingFill     /> Señalización Vial </li>
                                <li className={style.liFiltrados} > <MdPark /> Espacios Públicos </li>
                                <li className={style.liFiltrados} > <GiStreetLight /> Alumbrado Público  </li>
                                <li className={style.liFiltrados} > <MdOutlineRecycling /> Contaminación Ambiental </li>
                                 
                            </ul>
                        </li>
                        
                        <li className={style.li} title="Tu Perfil"><Link className={style.a} to="/vistaUsuario"> <FaUserCircle className={`icon ${style.iconsLog}`} /> </Link></li>
                        <li className={style.li} title="Salir"> <Link rel="stylesheet" href=""> <BiLogOut className={`icon ${style.iconsLog}`}/> </Link> </li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.filtrar}`}>
                <FiltrarPor/>
            </div>
            <div className={`contenedor ${style.cont_tarjetas}`}>
                <TarjetasPublicacion/>
                

            </div>
            <Footer />
        </div>

    )
}

export default UsuarioLog;
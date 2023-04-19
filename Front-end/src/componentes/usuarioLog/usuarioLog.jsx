import React, { useEffect, useState, useRef } from "react";
import style from '../usuarioLog/usuarioLog.module.css'
import FiltrarPor from "../filtrarPor/filtarPor";
import TarjetasPublicacion from "../tarjetasPublicacion/tarjetasPublicacion";
import InfiniteScroll from 'react-infinite-scroll-component';
import ModalReportes from '../modalReportes/modalReprotes'


import { Link, redirect} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { AiFillAlert } from "react-icons/ai";
import { BsSignStopFill, BsFillSignNoParkingFill } from "react-icons/bs";
import { MdPark } from "react-icons/md";
import { MdOutlineRecycling } from "react-icons/md";
import {GoMegaphone} from "react-icons/go";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {GiStreetLight} from "react-icons/gi";


function UsuarioLog(params) {
    // ESTADO DEL MODAL
    const [estadoModal , setEstadoModal] = useState(false)
    // ESTADO DE LAS PUBLICACIONES
    const [publicaciones, setPublicaciones] = useState()
    // EL NUMERO DE LA PUBLICACION QUE SE MUESTRA
    const [numeroPublicacion, setNumeroPublicacino] = useState(0)
    // NUMERO DE LA PAGINACION EN LA QUE VA LA PETICION
    const [paginaPublicaciones , setPaginaPublicaciones] = useState(0)
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);

    useEffect(()=>{
        fetch(`https://midenuncia-database-production.up.railway.app/infoRequestUser?limit=5&offset=0`)
        .then(res => res.json())
        .then(res => setPublicaciones(res.news) )
    },[])

    // FUNCIONA LA CUAL HACE LA PETICION Y EL REDNDER DE LAS NUEVAS TARJESTAS
    function nuevoLlamado(page) {
        fetch(`https://midenuncia-database-production.up.railway.app/infoRequestUser?limit=5&offset=${page}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.news);
            let nuevaPublicaiones = publicaciones.concat(res.news)
            setPublicaciones(nuevaPublicaiones)
            setPaginaPublicaciones( paginaPublicaciones + 1)
        })
    }

    function llamarTarjetas (publicaciones) {
        let nuevasPublicaciones = publicaciones.map( (publicacion, index) =>{
           return  <TarjetasPublicacion  key={publicaciones[index].id}/>
        })
        return nuevasPublicaciones
    }
    
    function Logout(){
        //Borra el localStorage
        
        localStorage.clear();
        console.log("Saliendo...");
        window.location.href="/"
    }
    
  
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
                <img src="https://res.cloudinary.com/dwrupo75d/image/upload/v1681503206/logo_t6vkfb.png" alt="logo" className={style.logo} />
                </div>
                <div className={`contenedor ${style.cont_Right}`}>
                    <ul className={`contenedor ${style.listaBoton}`}>
                    
                    <li className={`${style.li} ${style.peticion}`} title="¡Publica una nueva petición!"><Link className={style.a} to="/PeticionesUsuarios"><GoMegaphone className={`icon ${style.peticiones} ${style.iconsLog}`}/></Link></li>
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

                        <li className={`${style.li} ${style.notificaciones}`} >
                            <div className={style.a} to="/"> <VscSettings className={`icon ${style.iconsLog}`}/></div>
                            <ul className={`contenedor ${style.despegableFiltro} ${style.li}`} >
                                <li className={style.liFiltrados} > <AiFillAlert /> Seguridad  </li>
                                <li className={style.liFiltrados} > <BsSignStopFill /> Malla Vial </li>
                                <li className={style.liFiltrados} > <BsFillSignNoParkingFill     /> Señalización Vial </li>
                                <li className={style.liFiltrados} > <MdPark /> Espacios Públicos </li>
                                <li className={style.liFiltrados} > <GiStreetLight /> Alumbrado Público  </li>
                                <li className={style.liFiltrados} > <MdOutlineRecycling /> Contaminación Ambiental </li>
                                 
                            </ul>
                        </li>
                        
                        <li className={style.li} title="Tu Perfil"><Link className={style.a} to="/vistaUsuario"> <FaUserCircle className={`icon ${style.iconsLog}`} /> </Link></li>
                        <li className={style.li} title="Salir"> <Link rel="stylesheet" onClick={Logout} > <BiLogOut className={`icon ${style.iconsLog}`}/> </Link> </li>
                    </ul>
                    <button onClick={()=>setEstadoModal(!estadoModal)} >modal</button>
                </div>
            </div>

            <div className={`contenedor ${style.filtrar}`}>
                <FiltrarPor/>
            </div>

            <div className={`contenedor ${style.cont_tarjetas}`}>

                <InfiniteScroll 
                dataLength={publicaciones === undefined ? 5 : publicaciones.length} 
                next={()=> {nuevoLlamado(paginaPublicaciones)}} 
                hasMore={true} >

                { publicaciones === undefined ?  null : llamarTarjetas(publicaciones) }

                </ InfiniteScroll>            
            </div>

            {/* MODAL */}

            <ModalReportes 
                estadoModal={estadoModal}
                setEstadoModal={setEstadoModal} 
            />                

        </div>

    )
}

export default UsuarioLog;

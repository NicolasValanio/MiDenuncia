import React, { useEffect, useState, useRef } from "react";
import style from '../usuarioLog/usuarioLog.module.css'
import FiltrarPor, {FiltrarPorA} from "../filtrarPor/filtrarPor";
import TarjetasPublicacion from "../tarjetasPublicacion/tarjetasPublicacion";
import InfiniteScroll from 'react-infinite-scroll-component';
import ModalReportes from '../modalReportes/modalReportes';
import { MenuPerfil } from '../MenuPerfil/MenuPerfil';


import { Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { AiFillAlert } from "react-icons/ai";
import { BsSignStopFill, BsFillSignNoParkingFill } from "react-icons/bs";
import { MdPark } from "react-icons/md";
import { MdOutlineRecycling } from "react-icons/md";
import {GoMegaphone} from "react-icons/go";
import { BiLogOut } from "react-icons/bi";
import {GiStreetLight} from "react-icons/gi";


function UsuarioLog() {
    //ACTUALIZAR PETICINO
    const [ actualizarDatos , setActualizarDatos] = useState(false)
    // ID DEL REPORTE 
    const [idReporte, setIdeReporte] = useState(0)
    // ESTADO DEL MODAL
    const [estadoModal , setEstadoModal] = useState(false)
    // ESTADO DE LAS PUBLICACIONES
    const [publicaciones, setPublicaciones] = useState()
    const [ultimasPublicaciones, setUltimasPublicaciones] = useState()
    // NUMERO DE LA PAGINACION EN LA QUE VA LA PETICION
    const [paginaPublicaciones , setPaginaPublicaciones] = useState(1)
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);

    useEffect(()=>{
        fetch(`https://midenuncia-database-production.up.railway.app/infoRequestUser?limit=5&offset=0`)
        .then(res => res.json())
        .then(res => setUltimasPublicaciones(res.news))
    },[actualizarDatos])

    // FUNCIONA LA CUAL HACE LA PETICION Y EL REDNDER DE LAS NUEVAS TARJESTAS
    async function nuevoLlamado(page) {
        await fetch(`https://midenuncia-database-production.up.railway.app/infoRequestUser?limit=5&offset=${page}`)
        .then(res => res.json())
        .then(res => {
            let nuevaPublicaiones = ultimasPublicaciones.concat(res.news)
            setUltimasPublicaciones(nuevaPublicaiones)
            setPaginaPublicaciones( paginaPublicaciones + 1)
        })
    }

    function llamarTarjetas (publications) {
        if (publicaciones) {
            const returnPublicaciones = publicaciones.map((publicacion,index) =>{   
                return  <TarjetasPublicacion 
                api={publicacion} 
                key={publicaciones[index].id} 
                setEstadoModal={setEstadoModal} 
                setIdeReporte={setIdeReporte}
                setActualizarDatos={setActualizarDatos}
                actualizarDatos={actualizarDatos}
                />
             })
             return returnPublicaciones
        }

        const returnPublicaciones = publications.map( (publicacion,index) =>{   
           return  <TarjetasPublicacion 
           api={publicacion} 
           key={ultimasPublicaciones[index].id} 
           setEstadoModal={setEstadoModal} 
           setIdeReporte={setIdeReporte}
           setActualizarDatos={setActualizarDatos}
           actualizarDatos={actualizarDatos}
           />
        })
        return returnPublicaciones
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

    const [ver, setVer] = useState(false);
    function handleClickMenuPerfil(){
        ver ? setVer(false) : setVer(true);
        setVerFiltro(true);

    }

    const [verFiltro, setVerFiltro] = useState(false);
    function handleClickVerFiltro(){
        verFiltro ? setVerFiltro(false) : setVerFiltro(true);
        setVer(false);
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
                       

                        {/* <li className={`${style.li} ${style.notificaciones}`} onClick={handleClickVerFiltro} > */}
                        <li className={`${style.li} ${style.ocultarB}`} title="Filtrar por" onClick={handleClickVerFiltro} >
                            <div className={style.a} to="/"> <VscSettings className={`icon ${style.iconsLog}`}/></div>
                            {/* <ul className={`contenedor ${style.despegableFiltro} ${style.li}`} >
                                <li className={style.liFiltrados} > <AiFillAlert /> Seguridad  </li>
                                <li className={style.liFiltrados} > <BsSignStopFill /> Malla Vial </li>
                                <li className={style.liFiltrados} > <BsFillSignNoParkingFill     /> Señalización Vial </li>
                                <li className={style.liFiltrados} > <MdPark /> Espacios Públicos </li>
                                <li className={style.liFiltrados} > <GiStreetLight /> Alumbrado Público  </li>
                                <li className={style.liFiltrados} > <MdOutlineRecycling /> Contaminación Ambiental </li>
                                 
                            </ul> */}
                        </li>
                        {/* <li className={style.li} title="Tu Perfil"><Link className={style.a} to="/vistaUsuario"> <FaUserCircle className={`icon ${style.iconsLog}`} /> </Link></li> */}
                        <li className={style.li} style={{position:"relative"}} title="Tu Perfil" >
                            <FaUserCircle className={`icon ${style.iconsLog}`} onClick={handleClickMenuPerfil}/>
                            <MenuPerfil mostrar={ver}/> 
                        </li>   
                        <li className={style.li} title="Salir"> <Link rel="stylesheet" onClick={Logout} > <BiLogOut className={`icon ${style.iconsLog}`}/> </Link> </li>
                    </ul>
                </div>
            </div>

            {/* <div className={`contenedor `} style={verFiltro ? {display:"block"}:{display:"block"}}>*/}
            
            <div className={`contenedor ${style.filtrar} ${style.ocultarA}`}>
                <FiltrarPorA publicaciones={ultimasPublicaciones} ultimas={publicaciones} setPublicaciones={setPublicaciones}/>
            </div>
            {verFiltro && <div className={style.mostrarResponsive}><FiltrarPorA publicaciones={ultimasPublicaciones} setPublicaciones={setPublicaciones}/></div>}
            {/* <div className={`contenedor ${style.filtrar} ${style.ocultar}`}>
                <FiltrarPor mostrar={verFiltro}/>
            </div> */}
            


            <div className={`contenedor ${style.cont_tarjetas} ${estadoModal ? style.quieto : null}`}>

                <InfiniteScroll 
                dataLength={ultimasPublicaciones === undefined ? 5 : ultimasPublicaciones.length} 
                next={()=> {nuevoLlamado(paginaPublicaciones)}} 
                hasMore={true} >
        
                { ultimasPublicaciones === undefined ?  null : llamarTarjetas(ultimasPublicaciones) }
        
                </ InfiniteScroll>  

            </div>

            {/* MODAL REPORTES */}


            { estadoModal ? 
                <ModalReportes 
                    estadoModal = {estadoModal}
                    setEstadoModal  = {setEstadoModal}
                    idReporte = {idReporte}
                /> 
                : 
                    null 
            }



        </div>

    )
}

export default UsuarioLog;

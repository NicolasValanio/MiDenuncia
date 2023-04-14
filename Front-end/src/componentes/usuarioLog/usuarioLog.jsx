import React, { useEffect, useState, useRef } from "react";
import style from '../usuarioLog/usuarioLog.module.css'
import FiltrarPor from "../filtrarPor/filtarPor";
import TarjetasPublicacion from "../tarjetasPublicacion/tarjetasPublicacion";


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
import InfiniteScroll from 'react-infinite-scroll-component';


function UsuarioLog(params) {

    const [pokemon, setPokemon] = useState()
    const [pagePokemon , setPagePokemon] = useState(0)
    const [showNotifications, setShowNotifications] = useState(false);
    const notificationRef = useRef(null);

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
        .then(res => res.json())
        .then(res => {
            setPokemon(res.results)
            console.log(res);
    })
    },[])
    
    function Logout(){
        //Borra el localStorage
        
        localStorage.clear();
        console.log("Saliendo...");
        window.location.href="/"
    }
    

    function nuevoLlamado(page) {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
        .then(res => res.json())
        .then(res => {
            let nuevoPokemon = pokemon.concat(res.results)
            setPokemon(nuevoPokemon)
            setPagePokemon( pagePokemon + 1)
        })
    }

    function llamarPokemon() {
       let retornar = pokemon.map(pokemon => {
            return(
                <div className={style.pokemon}>
                    <h1> {pokemon.name} </h1>
                </div>
            )
        })
        return retornar
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
                        <li className={style.li} title="Salir"> <Link rel="stylesheet" onClick={Logout} > <BiLogOut className={`icon ${style.iconsLog}`}/> </Link> </li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.filtrar}`}>
                <FiltrarPor/>
            </div>
            <div className={`contenedor ${style.cont_tarjetas}`}>

                <TarjetasPublicacion key='2' />


                <InfiniteScroll dataLength={pokemon === undefined ? 5 : pokemon.length} 
                next={()=> {nuevoLlamado(pagePokemon)}} hasMore={true} >

                {

                    pokemon === undefined ?  null : llamarPokemon()

                }

                </ InfiniteScroll>            
            </div>
        </div>

    )
}

export default UsuarioLog;
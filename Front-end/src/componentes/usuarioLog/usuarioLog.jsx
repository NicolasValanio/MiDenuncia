import React, { useEffect, useState } from "react";
import style from '../usuarioLog/usuarioLog.module.css'
import FiltrarPor from "../filtrarPor/filtarPor";
import TarjetasPublicacion from "../tarjetasPublicacion/tarjetasPublicacion";
import Pokemon from './pokemon'

import { Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { AiFillAlert } from "react-icons/ai";
import { BsSignStopFill, BsFillSignNoParkingFill } from "react-icons/bs";
import { MdPark } from "react-icons/md";
import { GiStreetLight } from "react-icons/gi";
import { MdOutlineRecycling } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import InfiniteScroll from 'react-infinite-scroll-component'


function UsuarioLog(params) {

    const [pokemon, setPokemon] = useState()
    const [pagePokemon , setPagePokemon] = useState(0)

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
        .then(res => res.json())
        .then(res => setPokemon(res.results))
    },[])

    function nuevoLlamado(page) {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
        .then(res => res.json())
        .then(res => {
            let nuevoPokemon = pokemon.concat(res.results)
            setPokemon(nuevoPokemon)
            setPagePokemon( pagePokemon + 1)
        })
    }


    return (
        <div className={`contenedor ${style.usuario_log}`}>
            <div className={`contenedor ${style.navLog}`}>
                <div className={` ${style.cont_left}`}>
                    <div className={style.logo}></div>
                </div>
                <div className={`contenedor ${style.cont_Right}`}>
                    <ul className={`contenedor ${style.listaBoton}`}>

                        <li className={style.li} >
                            <div className={style.a} to="/"> <IoMdNotifications className={`icon ${style.iconsLog}`}/></div>
                            <ul className={`contenedor ${style.despegableNotificaion} ${style.li}`}>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li>
                               <li>hola1</li> 
                            </ul>
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
                        
                        <li className={style.li}><Link className={style.a} to="/vistaUsuario"> <FaUserCircle className={`icon ${style.iconsLog}`} /> </Link></li>
                        <li className={style.li}> <link rel="stylesheet" href="" /> <BiLogOut className={`icon ${style.iconsLog}`}/> </li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.filtrar}`}>
                <FiltrarPor/>
            </div>
            <div className={`contenedor ${style.cont_tarjetas}`}>

                <InfiniteScroll dataLength={pokemon === undefined ? 5 : pokemon.length} 
                next={()=> {nuevoLlamado(pagePokemon)}} hasMore={true} >

                {

                    pokemon === undefined ?  null : pokemon.map((pokemon,index) =>{
                        return <Pokemon key={index} pokemones={pokemon.name} />
                    })

                }

                </InfiniteScroll>            
            </div>
        </div>

    )
}

export default UsuarioLog;
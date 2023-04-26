import style from '../misPeticiones/misPeticiones.module.css'
import TarjetasPublicacion from '../tarjetasPublicacion/tarjetasPublicacion'
import {llamarInfoMisPeticiones} from '../baseDeDatos'

import { IoMdNotifications } from "react-icons/io";
import { GoMegaphone } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { useState,useEffect } from 'react';


function MisPeticiones() {

    const [publicaciones, setPublicaciones] = useState()

    useEffect(()=>{
        let usuario = JSON.parse(window.localStorage.getItem('usuarioLogeado'))
        llamarInfoMisPeticiones(usuario.data.id).then(res => setPublicaciones(res.data.requestUser))
    },[])

    // publicaciones === undefined ? console.log("espere") : publicaciones.map( publica => console.log(publica));

    function tarjetasMisPeticiones(publicacion) {

        console.log(publicacion);

        let resul = publicacion.map((publica)=> {
            return(
                <div className={`contenedor ${style.tarjetas}`}>
                    <div className={`contenedor ${style.contBotones}`}>
                        <button className={`btn ${style.boton}`}>Eliminar</button>
                        <button className={`btn ${style.boton}`}>Solucionado</button>
                    </div>
                        <TarjetasPublicacion api = {publica} />
                    </div>
            )
        })

        return resul

        // publicacion.map((public) => {
        //     return(
        //         <div className={`contenedor ${style.tarjetas}`}>
        //             <div className={`contenedor ${style.contBotones}`}>
        //                 <button className={`btn ${style.boton}`}>Eliminar</button>
        //                 <button className={`btn ${style.boton}`}>Solucionado</button>
        //             </div>
        //             <TarjetasPublicacion api = {public} />
        //         </div>
        //     )
        // })

    }

    return(
        <div className={`contenedor ${style.misPeticiones}`}>
            <div className={`contenedor ${style.navbar}`}>
                <div className={`contenedor ${style.contlogo}`}>
                    <img src="https://res.cloudinary.com/dwrupo75d/image/upload/v1681503206/logo_t6vkfb.png" alt="logo" className={style.logo} />
                </div>
                <div className={`contenedor ${style.contIcons}`}>
                    <ul className={`contenedor ${style.icons}`}>
                        <li className={style.li}> <IoMdNotifications className={style.icon} /> </li>
                        <li className={style.li}> <GoMegaphone className={style.icon}/> </li>
                        <li className={style.li}> <FaUserCircle className={style.icon}/> </li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.contTarjetas}`}> 

             { publicaciones === undefined ?  null : tarjetasMisPeticiones(publicaciones) }

            </div>
        </div>
    )
}

export default MisPeticiones;
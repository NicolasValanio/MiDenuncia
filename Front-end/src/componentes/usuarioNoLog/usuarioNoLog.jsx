import React, { useEffect, useState } from "react";
import Style from "./usuarioNoLog.module.css"
import NavegacionNoLog from "../navegacionNoLog/navegacion";
import FiltrarPor from "../filtrarPor/filtarPor";
import Footer from "../footer/footer";
import Tarjetas from "../tarjetasPublicacion/tarjetasPublicacion";

function UsuarioNoLog() {

    const [publicaciones, setPublicaciones] = useState()

    useEffect((()=>{
        fetch(`https://midenuncia-database-production.up.railway.app/infoRequestUser?limit=10&offset=0`)
        .then(res => res.json())
        .then(res => setPublicaciones(res.news))
    }),[])

    function tarjetasNoLog() {
        let nuevasTarjetas = publicaciones.map(()=>{
            return <Tarjetas />
        })
        return nuevasTarjetas
    }

    return (
            <div>
                <NavegacionNoLog/>
                <div className={Style.main}>
                <FiltrarPor/>    
                    <div className={`contenedor ${Style.contTarjetas}`}>

                    { publicaciones === undefined ? null : tarjetasNoLog()}

                    </div>
                </div>

                <Footer/>
            </div> 
            
            
            
        )
}

export default UsuarioNoLog;
import React from "react";
import Style from "./UsuarioNoLog.module.css"
import NavegacionNoLog from "../navegacionNoLog/navegacion";
import FiltrarPor from "../filtrarPor/filtarPor";
import Footer from "../footer/footer";
import Tarjetas from "../tarjetasPublicacion/tarjetasPublicacion";

function UsuarioNoLog() {
    return (
            <div>
                <NavegacionNoLog/>
                <div className={Style.main}>
                <FiltrarPor/>    
                    <div className={Style.contTarjetas}>

                        {/* AQUI VAN LAS TARJETAS */}

                    </div>
                </div>

                <Footer/>
            </div> 
            
            
            
        )
}

export default UsuarioNoLog;
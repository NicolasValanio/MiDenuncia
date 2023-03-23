import React from "react";
import NavegacionNoLog from "../navegacionNoLog/navegacion"
import TarjetasPublicacion from "../tarjetasPublicacion/tarjetasPublicacion";

function UsuarioNoLog(params) {
    return (
        <div>
       <NavegacionNoLog/>
        <TarjetasPublicacion/>
        </div>
        )
}

export default UsuarioNoLog;
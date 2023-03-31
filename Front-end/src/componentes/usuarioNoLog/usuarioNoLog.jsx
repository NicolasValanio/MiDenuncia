import React from "react";
import NavegacionNoLog from "../navegacionNoLog/navegacion";
import FiltrarPor from "../filtrarPor/filtarPor";

function UsuarioNoLog(params) {
    return (
        <div>
            <NavegacionNoLog />
            <FiltrarPor />
        </div>
        
        )
}

export default UsuarioNoLog;
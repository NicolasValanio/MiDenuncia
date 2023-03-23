import React from "react";
import FiltrarPor from "../filtrarPor/filtarPor";
import NavegacionNoLog from "../navegacionNoLog/navegacion";
function UsuarioLog(params) {
    return (
        <div>
            <NavegacionNoLog />
            <FiltrarPor/>
        </div>
    )
}

export default UsuarioLog;
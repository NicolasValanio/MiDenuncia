import React from "react";
import NavegacionNoLog from "../navegacionNoLog/navegacion";
import FiltrarPor from "../filtrarPor/filtarPor";
import Footer from "../footer/footer";

function UsuarioNoLog(params) {
    return (
        <div>
            <NavegacionNoLog />
            <FiltrarPor />
            <Footer />
        </div>
        
        )
}

export default UsuarioNoLog;
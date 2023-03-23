import React from "react";
import style from "./NavegacionUserLog.module.css" ;

    


function NavegacionUserLog() {
    return(
        <div className={style.contenedorPrincipal}>
            <div className={style.imagen}></div>

            <div className={style.contenedorBtns}>
                
                <select name="" id="">
                    <option value="">Seguridad</option>
                    <option value="">Malla Vial</option>--
                    <option value="">Señalización Vial</option>
                    <option value="">Espacios Publicos</option>
                    <option value="">Alumbrado Publico</option>
                    <option value="">Contaminacion Ambiental</option>
                </select>
            </div>
        </div>
    )
}



export default NavegacionUserLog;
import React from "react";
import style from "./vistaSuperAdmin.module.css"
import { BiSearchAlt } from "react-icons/bi";

function VistaSuperAdmin() {
    return(
        <div>
            <h1>@SuperAdmin</h1>
            
           <BiSearchAlt className={style.iconBuscar}/><input type="text" placeholder="      Filtrar" />
           <div className={style.filtrar}>
           <select name="" id="" >
                <option value="">Nombre</option>
                <option value="">Usuario</option>
                <option value="">Barrio</option>
                <option value="">Rol</option>
                <option value="">Estado</option>
            </select>
           </div>
            
            <div className={style.barra}>
                <ul className={style.opciones}>
                    <li>Nombre</li>
                    <li>Usuario</li>
                    <li>Barrio</li>
                    <li>Correo</li>
                    <li>Rol</li>
                    <li>Estado</li>
                </ul>
            </div>
            <div className={style.barra}>
            <ul className={style.opciones}>
                    <li>Nombre</li>
                    <li>Usuario</li>
                    <li>Barrio</li>
                    <li>Correo</li>
                    <select name="" id="" className={style.rol}>
                        <option value="">Visitante</option>
                        <option value="">Administador</option>
                    </select>
                    <select name="" id="" className={style.rol}>
                        <option value="">Activo</option>
                        <option value="">Inactivo</option>
                    </select>
                </ul>

            </div>
        </div>
    )
}

export default VistaSuperAdmin;
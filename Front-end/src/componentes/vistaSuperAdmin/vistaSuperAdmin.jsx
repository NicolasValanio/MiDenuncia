import React, { useState, useEffect } from "react";
import style from "./vistaSuperAdmin.module.css"
import { BiSearchAlt } from "react-icons/bi";

function VistaSuperAdmin() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://midenuncia-database-production.up.railway.app/info")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);



    return(
        <div className={style.contenedor1}>
            <div className={style.name}>@SuperAdmin</div>
            
            <div>
            <BiSearchAlt className={style.iconBuscar}/><input className={style.input} type="text" placeholder="      Filtrar" />
           <div className={style.filtrar}>
           <select name="" id="" >
                <option value="">Nombre</option>
                <option value="">Usuario</option>
                <option value="">Barrio</option>
                <option value="">Rol</option>
                <option value="">Estado</option>
            </select>
            </div>
           
           </div>
            
            <div className={style.barra}>
                <ul className={style.opciones}>
                    <li>Nombre</li>
                    <li>Usuario</li>
                    <li>DIreccion</li>
                    <li>Correo</li>
                    <li>Rol</li>
                    <li>Estado</li>
                </ul>   
            </div>
            <div className={style.barra}>
                <div className={style.opciones}>
                    <div>
                    {data?.map((user) => (
                        <div key={user.id}>{user.name}</div>
                    ))}
                    </div>
                    
                    <li>nea</li>
                    <li>cumbre</li>
                    <li>Correo</li>
                    <select name="" id="" className={style.rol}>
                        <option value="">Visitante</option>
                        <option value="">Administador</option>
                    </select>
                    <select name="" id="" className={style.rol}>
                        <option value="">Activo</option>
                        <option value="">Inactivo</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default VistaSuperAdmin;
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

    let buscar = document.getElementById("buscar").value;
    
    console.log(buscar);

    return(
        <div className={style.contenedor1}>
           <div className={style.superAdmin}>@SuperAdmin</div>
           <div className={style.contenedorFiltrar}>
                    <div className={style.conteInput}>
                       <BiSearchAlt className={style.iconBuscar}/>
                       <input className={style.input}  type="text" placeholder="Filtrar" id="buscar"/>
                        <button>Buscar</button>
                    </div>


                    <div className={style.filtrar}>
                        <select name="" id="" >
                            <option value="">Nombre</option>
                            <option value="">Usuario</option>
                            <option value="">Barrio</option>
                            <option value="">Rol</option>
                            <option value="">Estado</option>
                        </select>
                    </div>
            </div >
                
                <div className={style.barras}>
                    <div className={style.barra1}>
                        <ul className={style.opciones}>
                            <li>Nombre</li>
                            <li>Usuario</li>
                            <li>DIreccion</li>
                            <li>Correo</li>
                            <li>Rol</li>
                            <li>Estado</li>
                        </ul>   
                    </div>
                  
                            <div className={style.configbarra2}>
                            {data?.map((user) => (
                                 
                                <div  key={user.name} className={style.barra2}> 
                                    <ul className={style.datos}>
                                        <li > {user.name}</li>
                                        <li>{user.nickname}</li>
                                        <li>{user.address? user.address : "dato vacio "}</li>
                                        <li>{user.email}</li>
                                        
                                        <select name="" id="">
                                            <option value="">activo</option>
                                            <option value="">inactivo</option>
                                        </select>
                                        <select name="" id="">
                                            <option value="">activo</option>
                                            <option value="">inactivo</option>
                                        </select>
                                    </ul>
                            </div>
                           

                            ))}
                        
                            </div>
                           
                       
                </div>
        </div>
    )
}

export default VistaSuperAdmin;
import React, { useState, useEffect } from "react";
import style from "./vistaSuperAdmin.module.css"
import { BiSearchAlt } from "react-icons/bi";
import {filtroUser} from "../baseDeDatos"
import {handle } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";


function VistaSuperAdmin() {
    const [data, setData] = useState([]);

    const [filtro, setFiltro] = useState("");


    const [estado, setEstado] = useState(Boolean);

    function handleClick() {
        setEstado(!estado);
      }

    

    const handleChange = (event) => {
        setFiltro(event.target.value);
       // console.log(event.target.value)
    
       fetch(`https://midenuncia-database-production.up.railway.app/info?filtro=${event.target.value}`)
          .then((response) => response.json())
          .then((info) => {
            setData(info)
            //console.log(info)
          })
        }
    
    useEffect(() => {
      fetch("https://midenuncia-database-production.up.railway.app/info")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

   
    return(
        <div className={style.contenedor1}>




            <div className={style.nav}>
                    <img src="https://res.cloudinary.com/dwrupo75d/image/upload/v1681503206/logo_t6vkfb.png" alt="logo" className={style.logo} />
                    <div className={style.user}> Perfil<BiUserCircle className={style.usuario} /></div>
           </div>
           <div className={style.superAdmin}>
           <h1>@SuperAdmin</h1>
           <div className={style.selectFiltro}>
                            <p>Filtrar por estado :</p>
                                <select>
                                    <option value="">activo </option>
                                    <option value="">inactivo</option>
                                </select>
                            <p>Filtrar por Rol :</p>
                                <select>
                                    <option value="">activo </option>
                                    <option value="">inactivo</option>
                                </select>   
                       </div>
           </div>
                        
           <GiReturnArrow className={style.volver}/>
           <div className={style.contenedorFiltrar}>
                    <div className={style.conteInput}>
                       <BiSearchAlt className={style.iconBuscar}/>
                       <input className={style.input}  type="text" placeholder="nickname, usuario, barrio" value={filtro} onChange={handleChange}/>                       
                    </div>
                    <div className={style.conteBuscar}>
                    <button className={style.filtrar}>Buscar</button>
                    </div>
            </div >
                      


                <div className={style.barras}>
                    <div className={style.barra1}>
                        <ul className={style.opciones}>
                            <li>Nombre</li>
                            <li>Usuario</li>
                            <li>Direccion</li>
                            <li>Correo</li>
                            <li>Estado</li>
                            <li>Rol</li>
                        </ul>   
                    </div>
                  
                            <div className={style.configbarra2}>
                            {data?.map((user) => (
                                 
                                <div  key={user.id} className={style.barra2}> 
                                    <ul className={style.datos}>
                                        <li > {user.name}</li>
                                        <li>{user.nickname}</li>
                                        <li>{user.address? user.address : "dato vacio "}</li>
                                        <li>{user.email}</li>
                                        
                                        <select className={style.estado} name="" id="">
                                            <option value="">activo</option>
                                            <option value="">inactivo</option>
                                        </select>
                                       
                                        <button  className={style.rol} onClick={handleClick}>{estado ? <span>visitante</span>: <span>admin</span>}</button>
                                    </ul>
                            </div>
                           

                            ))}
                        
                            </div>
                           
                       
                </div>
        </div>
    )
}

export default VistaSuperAdmin;
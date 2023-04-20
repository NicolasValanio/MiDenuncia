import React, { useEffect, useState } from "react";
import {FiHome } from "react-icons/fi";
import{FaUserCircle} from "react-icons/fa"
import style from './vistaUsuario.module.css';
import { useForm} from 'react-hook-form';
import Modales from '../modales/modales'
import axios from 'axios';

function VistaUsuario(params) {
    const [mostraDatos, setMostrarDatos]= useState(false);


    const [user, setUser] = useState([]);
    const [datosuser, setDatosuser] = useState([]);
     useEffect(()=>{
        fetch('https://midenuncia-database-production.up.railway.app/info')
        .then(Response=>Response.json())
        .then(data=>setUser(data))
        .catch(error => console.log(error));
        
    },[])
    useEffect(() => {
        setDatosuser(user.filter(users => users.name.toLowerCase().includes('id')));
    }, [user]);
    
    console.log(setUser);

    function handleClick(e) {
        e.preventDefault()
        setMostrarDatos(true)
    }
    
      
    function closeModal() {
        setMostrarDatos(false);
    }
  

    // function datosUsuarios() {

    //     const info = [Conex, setConex] = useState();

    //     useEffect(()=>{
    //         fetch('https://midenuncia-database-production.up.railway.app/info')
    //         .then((response) => response.json())
    //         .then((infor) => setConex(infor));
    
    //     },[])
        
    //     return info

    // }
    // datosUsuarios
      
     

    return(
        
        <div className={style.main_container} >
            
                <Modales isOpen={mostraDatos} setIsOpen={setMostrarDatos} title="Seguro que desea eliminar la cuenta">
                    <div className={style.modal}>
                        <img className={style.gifimagen} src="./src/componentes/vistaUsuario/images/mundo.gif" alt=""/>
        
                        <div className={style.inputverificar}>
                            <input type="button" value="Cancelar" className={`btn ${style.botonesmodal}`} onClick={closeModal}/>
                            <input type="button" value="Aceptar" className={`btn ${style.botonesmodal}`}  />
                        </div>
                    </div>
                </Modales>
                
                {datosuser.map(user => (
                    <li key={users.id}>{users.name}</li>
                ))}

                
                <nav className={style.nabvarview}>
                    <div className={style.contaImage}> 

                        <img className={style.imagen} src="./src/componentes/vistaUsuario/images/logo.png" alt=""/>

                    </div>  
                    <div className={style.nabiconos}>
                        <div>
                            <button href="" className={style.Iconos1}>
                                <FaUserCircle className={style.Fihome}/>
                            </button>
                        </div>
                        <div>
                            <button href="" className={style.Iconos1}>
                                <FiHome className={style.Fihome}/>
                                {/* <h4 className={style.homeIcono}>Home</h4> */}
                            </button>
                        </div>
                    </div>
                </nav>    
            
                <div className={style.containerEdiPrinipal}>

                {/* <iframe src="https://stapadblockuser./e/aVy17drW1OtxkbD/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe> */}

                        <div className={style.infoUsuario}>
                            <h3>t</h3>
                         
                        </div>
                    
                    <div className={style.containerEditarPerfil}>
                        <h1>Editar perfil</h1>
                        <form  className={style.formulario}>
                            <div className={style.datosFila1}>
                      
                           



                                <label htmlFor="">Nombre
                                    <input className={style.inputdatos} type="text" />
                                </label>
                                

                                <label htmlFor="">Apellido                           
                                    <input className={style.inputdatos} type="text" />
                                </label>
                                <div className={style.inputButon}>
                                    <button className={style.botonGuardar}>
                                        Guardar cambios
                                    </button>
                                    <button className={style.elimCuenta} onClick={handleClick}>
                                        Elininar cuenta
                                    </button> 
                                </div>

                            </div>
                            <div  className={style.datosFila1}>
                                
                                <label htmlFor="">Usuario
                                    <input className={style.inputdatos} type="text" />
                                </label>
                               

                                <label htmlFor="">Contraseña
                                 <input className={style.inputdatos} type="text" />
                                </label>
                                
                                <label htmlFor="">Confirmar contraseña
                                 <input className={style.inputdatos} type="text" />
                                </label>
                                               

                            </div>

                        </form>

                        
                    </div>
                </div>
    
    
    
    
    </div>
    )
}

export default VistaUsuario;
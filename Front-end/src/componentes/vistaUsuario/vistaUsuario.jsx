import React from "react";
import {FiHome } from "react-icons/fi";
import{FaUserCircle} from "react-icons/fa"
import style from './vistaUsuario.module.css';
// import { useForm} from 'react-hook-form';
function VistaUsuario(params) {
    return(
        <div className={style.main_container}>




        
            
            

                    {/* <div> */}

                    {/* </div> */}

                   
                {/*     
                    <button className={style.elimCuenta}>
                        Elininar cuenta
                    </button> */}
                    
                
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
                        <button>
                             Guardar Datos   
                        </button>
                        
                    </div>
                </div>
    
    
    
    
    </div>
    )
}

export default VistaUsuario;
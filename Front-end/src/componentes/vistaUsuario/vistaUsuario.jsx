import React from "react";
import {FiHome } from "react-icons/fi";
import {AiFillSetting} from "react-icons/ai";
import {BsQuestionCircle,BsFillCameraFill} from "react-icons/bs"
import style from './vistaUsuario.module.css';
function VistaUsuario(params) {
    return(
        <div className={style.main_container}>




           <div className={style.container}> 
                <div className={style.contaImage}> 

                    <img className={style.imagen} src="./src/componentes/vistaUsuario/images/logo.png" alt=""/>

                </div>
                <div className={style.containerIconos}>

                    <button href="" className={style.Iconos1}>
                        
                        <FiHome className={style.Fihome}/>
                       
                        
                        <h4 className={style.homeIcono}>Home</h4>
                        
                    </button>

                    <div>

                        <button className={style.Iconos2}>
                            
                            <AiFillSetting className={style.AiFillSetting}/>
                            <h4 className={style.confiIcono}>Configuración</h4>

                        </button>

                        <button className={style.Iconos3}>

                            <BsQuestionCircle className={style.BsQuestionCircle}/>
                            <h4 className={style.ayudaIcono}>Ayuda y soporte técnico</h4>

                        </button>
                    </div>

                   

                    <button className={style.elimCuenta}>
                        Elininar cuenta
                    </button>
                    
                </div>

            </div>
                <div className={style.containerEdiPrinipal}>
                        <img src="./src/componentes/vistaUsuario/images/usuario.png" alt=""  className={style.imgUsuario}/>
                        <BsFillCameraFill className={style.BsFillCameraFill}/>   
                
                    <div className={style.containerEditarPerfil}>
                        <h1>Editar perfil</h1>
                        <form action="" className={style.formulario}>
                            <div className={style.datosFila1}>
                                <label htmlFor=""></label>
                                <input className={style.inputdatos} type="text" />
                                

                                <label htmlFor=""></label>
                                <input className={style.inputdatos} type="text" />
                                

                                <label htmlFor=""></label>
                                <input className={style.inputdatos} type="text" />
                                

                                <label htmlFor=""></label>
                                <input className={style.inputdatos} type="text" />
                                
                            </div>
                            <div  className={style.datosFila1}>
                                
                                <label htmlFor=""></label>
                                <input className={style.inputdatos} type="text" />
                               

                                <label htmlFor="">cedula 
                                 <input className={style.inputdatos} type="text" />
                                </label>
                                

                                <label htmlFor="">sas
                                 <input className={style.inputdatos} type="text" />
                                </label>
                                

                                <label htmlFor="">
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
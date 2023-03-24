import React from "react";
import {FiHome } from "react-icons/fi";
import {AiFillSetting} from "react-icons/ai";
import {BsQuestionCircle,BsFillCameraFill} from "react-icons/bs"
import style from './vistaUsuario.module.css';

function VistaUsuario(params) {
    return(
        <div className={style.main_container}>




           <div className={style.container}> 
                <div> 

                    <img className={style.imagen} src="./src/componentes/vistaUsuario/images/logo.png" alt="" />

                </div>
                <div>
                    <a href="">
                        <FiHome className={style.Fihome}/>
                        <h4 className={style.homeIcono}>Home</h4>
                    </a>

                    <a href="">
                        <AiFillSetting className={style.AiFillSetting}/>
                        <h4 className={style.confiIcono}>Configuración</h4>
                    </a>

                    <a href="">
                    <BsQuestionCircle className={style.BsQuestionCircle}/>
                        <h4 className={style.ayudaIcono}>Ayuda y soporte técnico</h4>
                    </a>
                   

                    <button className={style.elimCuenta}>
                        Elininar cuenta
                    </button>
                </div>

            </div>
                <div className={style.containerEdiPrinipal}>
                        <img src="./src/componentes/vistaUsuario/images/usuario.png" alt=""  className={style.imgUsuario}/>
                        <BsFillCameraFill className={style.BsFillCameraFill}/>   
                
                    <div className={style.containerEditarPerfil}>
                
                    </div>
                </div>
    
    
    
    
    </div>
    )
}

export default VistaUsuario;
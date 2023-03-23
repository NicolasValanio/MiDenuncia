import React from "react";
import {FiHome } from "react-icons/fi";
import {AiFillSetting} from "react-icons/ai";
import {BsQuestionCircle} from "react-icons/bs"
import style from './vistaUsuario.module.css';

function VistaUsuario(params) {
    return(
        <div className={style.main_container}>

            <div className={style.container}> 

                <img className={style.imagen} src="./src/componentes/vistaUsuario/images/logo.png" alt="" />

            </div>


            <div>
                <div>
                    {/* <FaUserEdit className={style.iconoUsuario}/> */}
                    <FiHome className={style.Fihome}/>
                    <h4 className={style.homeIcono}>Home</h4>

                    <AiFillSetting className={style.AiFillSetting}/>
                    <h4 className={style.confiIcono}>Configuración</h4>
                    <BsQuestionCircle className={style.BsQuestionCircle}/>
                </div>
                <div>

                </div>


                <div>
                    
                </div>
            </div>

        </div>
    )
}

export default VistaUsuario;
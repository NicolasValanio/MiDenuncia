import React from "react";
import style from "./peticionesUsuarios.module.css"
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoDocumentTextOutline} from "react-icons/io5";


function PeticionesUsuarios() {
    return (
       <section className={style.contenedorPrincipal}>
        {/* contenedor nav */}
        <div className={style.contenedor}>
            <div className={style.logo} />
            <IoPersonCircleOutline className={style.icono}/>
        </div>
        {/* contenedor de bienvenido */}
        <div className={style.contenedortext}>
            <h3 className={style.tituloh3}>Bienvenido</h3>
            <p className={style.titulop}>Apreciado cuidadano, si usted desea realizar una petición, este es el espacio para hacerlo.</p>
        </div>
        {/* contenedor form */}
        <div className={style.contenedorform}>
            <p className={style.contenedortext}>Registro de solicitud-Recuerda que los campos con * son obligatorios</p>
            {/* select para elegir el tipo de solicitud */}
            <div className={style.contenedorSolicitud}>
                <p>Tipo de solicitud:</p>
                <select name="" id="" className={style.contenedorselect}  >
                    <option value="" selected>Tipo de solicitud</option>
                </select>
            </div>
            <div className={style.contenedorDatos}>
                <div className={style.contenedoricotex}>
                    <IoDocumentTextOutline className={style.icontext} />
                    <p>Datos personales:</p>
                </div>
            
                <div className={style.info}> 
                    <p>Tipo de documento:</p>
                    <select name="" id="">
                        <option value="" selected>tipo de documento</option>
                    </select>
            
                </div>


                <div className={style.infolabel}>
                    <label htmlFor="">
                            N&uacute;mero de documento:
                            <input type="number" placeholder=" Número de documento *"/>
                    </label>
                </div>

                <div className={style.infolabel}>
               <label htmlFor="">
                    Confirmaci&oacute;n de documento:
                    <input type="number" placeholder="confirmación de documento" />
               </label>
                </div>


                <div className={style.infolabel}>
               <label htmlFor="">
                    Lugar de expedici&oacute;n:
                    <input type="text" placeholder="Lugar de expedición*"/>
               </label>
                </div>

                <div className={style.infolabel}>
               <label htmlFor="">
                    Nombres:
                    <input type="text" disabled/>
               </label>
                </div>

                <div className={style.infolabel}>
               <label htmlFor="">
                    Apellidos:
                    <input type="text" disabled/>
               </label>
                </div>

                <div className={style.infolabel}>
               <label htmlFor="">
                    Direcci&oacute;n 
                    <input type="text" placeholder="Ejemplo: cll 01 #02-03*"/>
               </label>
                </div>
                <div className={style.infolabel}>
               <label htmlFor="">
                    Telefono:
                    <input type="text" placeholder="Ejemplo: 3157845*"/>
               </label>
                </div>


            

            
            </div>

        </div>

       </section>
    )
}

export default PeticionesUsuarios;
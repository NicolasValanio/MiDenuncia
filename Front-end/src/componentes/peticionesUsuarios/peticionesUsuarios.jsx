import React, { useState } from "react";
import style from "./peticionesUsuarios.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function PeticionesUsuarios() {
    return (
        <section className={style.contenedorPrincipal}>
            {/* contenedor nav */}
            <div className={style.contenedor}>
                <div className={style.logo} />
                <IoPersonCircleOutline className={style.icono} />
            </div>
            {/* contenedor de bienvenido */}
            <div className={style.contenedortext}>
                <h3 className={style.tituloh3}>Bienvenido</h3>
                <p className={style.titulop}>
                    Apreciado cuidadano, si usted desea realizar una petición, este es el
                    espacio para hacerlo.
                </p>
            </div>
            {/* contenedor form */}
            <form action="" className={style.contenedorform}>

                <p className={style.contenedortext}>
                    Registro de solicitud-Recuerda que los campos con * son obligatorios
                </p>
                {/* select para elegir el tipo de solicitud */}
                <div className={style.contenedorSolicitud}>
                    <p>Tipo de solicitud:</p>
                    <select name="" id="" className={style.contenedorselect}>
                        <option value="" selected>
                            Tipo de solicitud
                        </option>
                    </select>
                </div>
                {/* inicio de datos personales */}
                <div className={style.contenedorDatos}>
                    <div className={style.contenedoricotex}>
                        <IoDocumentTextOutline className={style.icontext} />
                        <p>Datos personales:</p>
                    </div>

                    <div className={style.info}>
                        <p>Tipo de documento:</p>
                        <select name="" id="">
                            <option value="" selected>
                                tipo de documento
                            </option>
                        </select>
                    </div>

                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Número de documento:
                            <input type="number" placeholder=" Número de documento *" />
                        </label>
                    </div>

                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Confirmación de documento:
                            <input type="number" placeholder="confirmación documento" />
                        </label>
                    </div>

                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Lugar de expedición:
                            <input type="text" placeholder="Lugar de expedición*" />
                        </label>
                    </div>

                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Nombres:
                            <input type="text" disabled />
                        </label>
                    </div>

                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Apellidos:
                            <input type="text" disabled />
                        </label>
                    </div>

                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Dirección
                            <input type="text" placeholder="Ejemplo: cll 01 #02-03*" />
                        </label>
                    </div>
                    <div className={style.infolabel}>
                        <label htmlFor="">
                            Telefono:
                            <input type="text" placeholder="Ejemplo: 3157845*" />
                        </label>
                    </div>
                </div>
                {/* siguiente información para llenar la petición */}
                <div>
                    <div className={style.complinf}>
                        <label htmlFor="">
                            Asunto del problema:
                            <input type="text" placeholder="Describe en una oración el problema que observa*" />
                        </label>
                    </div>
                    <div className={style.complinf}>
                        <label htmlFor="">
                            Descripción del problema:
                            <input type="text" placeholder="Realiza una descripcion detallada del problema que percibes*" />
                        </label>
                    </div>
                    <div className={style.textdes}>
                        <label htmlFor="">
                            Descripción de la solicitud:
                            <textarea type="text" rows={15} placeholder="Realiza una descripción detallada de lo que solicitas para solucionar el problema que se esta presentando*" />
                        </label>
                    </div>
                </div>
                {/* datos de localizacion sobre el problema */}
                <div className={style.inflocal}>
                    <h3>Localización del problema:</h3>
                    <div className={style.infbar}>
                        <label htmlFor="">
                            Bario:
                            <input type="text" placeholder="Barrio donde se ubica el problema*" />
                        </label>
                    </div>
                    <div className={style.infodesp}>
                        <label htmlFor="">
                            Descripción del problema:
                            <textarea name="" id="" cols="45" rows="8" placeholder="Realiza una descripción detallada de la localización del problema*"></textarea>
                        </label>
                    </div>
                </div>
                {/* adjuntar la imagen de la petición */}
                <div className={style.infoimg}>
                    <h3>Archivos adjuntos:</h3>
                    <p>Señor usuario debe adjuntar solo fotos con un peso Max de 5mb</p>
                    <input type="file" />

                </div>
                {/* texto importante para erl usuario */}
                <div className={style.textusu}>
                    <p>
                        Respuesta: Es importante revisar periódicamente el correo electrónico que registraste en la pagina durante un plazo aproximado de 15 dias hábiles, ya que es la forma más probable a tu peticón.sin embargo,también podrias recibir alguna respuesta por correspondencia fisica o te podrán solicitar  mas información por teléfono.
                    </p>
                </div>
                {/* firma del usuario */}
                <div className={style.infofirma}>

                </div>
                {/* termino de datos */}
                <div className={style.infoterminos}>
                    <div className={style.terminosDatos}>
                        <h3>Tratamiento de datos:</h3>
                        <div className={style.datostext}>
                            <input type="checkbox" id="" />
                            <label>He leído y acepto las <span>políticas de Privacidad y Tratamiento de Datos Personales.</span></label>
                        </div>
                    </div>
                    <div>
                        <h3>Terminos y condiciones:</h3>
                        <div className={style.datostext}>
                            <input type="checkbox" id="" />
                            <label>Helido y acepto los<span>terminos y condiciones de esta petición.</span></label>
                        </div>
                    </div>
                </div>
                {/* botenes */}
                <div className={style.botones}>
                     <button className={style.boton1}>Enviar<IoIosPaperPlane/></button>
                     <button className={style.boton2}>Cancelar<IoCloseSharp/></button>
                    
                </div>
            </form>
        </section>
    );
}

export default PeticionesUsuarios;

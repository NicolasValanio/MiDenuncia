import style from './peticionesUsuarios.module.css'
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline, IoDocumentTextOutline, IoCloseSharp } from 'react-icons/io5'
import { IoIosPaperPlane } from 'react-icons/io'

function PeticionesUsuarios () {
    
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
                    Registro de solicitud - Recuerda que los campos con * son obligatorios
                </p>
                {/* select para elegir el tipo de solicitud */}
                <div className={style.contenedorSolicitud}>
                    <label className={style.solilabel}>Tipo de solicitud:</label>
                    <select name="" id="" className={style.contenedorselect}>
                        <option value="" selected>
                            Tipo de solicitud
                        </option>
                    </select>
                </div>
                {/* inicio de datos personales */}
                <div className={style.contenedorprinDatos}>

                        <div className={style.contenedoricotex}>
                            <IoDocumentTextOutline className={style.icontext} />
                            <p>Datos personales:</p>
                        </div>
                    <div className={style.contenedorDatos}>

                        <div className={style.info}>
                            <p>* Tipo de documento:</p>
                            <select name="" id="">
                                <option value="" selected>
                                    tipo de documento
                                </option>
                            </select>
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="documento">* Número de documento:</label>
                            <input type="text" placeholder="91287459" id='documento' />
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="cofirmacionDocumento">
                                * Confirmación de documento:
                            </label>
                            <input type="text" placeholder="91287459" id='cofirmacionDocumento' />
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="expedicion">
                               * Lugar de expedición:
                            </label>
                            <input type="text" placeholder="Bucaramanga"  id='expedicion'/>
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="nombre">
                                Nombres:
                            </label>
                            <input type="text" disabled/>
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="apellido">
                                Apellidos:
                            </label>
                            <input type="text" disabled/>
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="direccion">
                               * Dirección
                            </label>
                            <input type="text" placeholder=" cll 01 #02-03" id='direccion'/>
                        </div>

                        <div className={style.infolabel}>
                            <label htmlFor="barrioper">
                               * Barrio
                            </label>
                            <input type="text" placeholder="García Rovira" id='barrioper'/>
                        </div>
                        <div className={style.infolabel}>
                            <label htmlFor="telefono">
                               * Telefono:
                            </label>
                            <input type="text" placeholder="3157845257" id='telefono'/>
                        </div>
                    </div>
                </div>
                {/* siguiente información para llenar la petición */}
                <div>
                    <div className={style.complinf}>
                        <label htmlFor="asunto">
                          * Asunto del problema:
                        </label>
                        <input type="text" placeholder="Daño en el alcantarillado" id='asunto' />
                    </div>
                    <div className={style.complinf}>
                        <label htmlFor="descripcion">
                         * Descripción del problema:
                        </label>
                        <input type="text" placeholder="Debido a esto se han ocacionado muchos accidentes en la via, por el robo de una tapa de la alcantandarilla" id='descripcion' />
                    </div>
                    <div className={style.textdes}>
                        <label htmlFor="desSolicitud">
                           * Descripción de la solicitud:
                        </label>
                        <textarea type="text" rows={15} placeholder="Quisiera reportar este  incidente ante las entidades gubernamentales para que hagan acción..." id='desSolicitud'/>
                    </div>
                </div>
                {/* datos de localizacion sobre el problema */}
                    <h3 className={style.textlocal}>Localización del problema:</h3>
                <div className={style.inflocal}>
                    <div className={style.infbar}>
                        <label htmlFor="barrio">
                        * Barrio:
                        </label>
                        <input type="text" placeholder="García Rovira" id='barrio' />
                    </div>
                    <div className={style.infodesp}>
                        <label htmlFor="descripcion">* Descripción de la localización:</label>
                        <textarea name="" id="descripcion" cols="45" rows="8" placeholder="Este incidente se encuentra en la carrera 13 #31-34..."></textarea>
                    </div>
                </div>
                {/* adjuntar la imagen de la petición */}
                <div className={style.infoimg}>
                    <h3>Archivos adjuntos:</h3>
                    <p>Señor/a usuario debe adjuntar solo fotos con un peso máximo de 5mb</p>
                    <input type="file" />

                </div>
                {/* texto importante para erl usuario */}
                <div className={style.textusu}>
                    <p>
                        Respuesta: Es importante revisar periódicamente el correo electrónico que registraste en la página, durante un plazo aproximado de 15 días hábiles, ya que es la forma más probable de respuesta a tu peticón. Sin embargo, también podrías recibir alguna respuesta por correspondencia física o solicitar  más información por teléfono.
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
                            <label>He leído y acepto los <span>términos y condiciones de esta petición.</span></label>
                        </div>
                    </div>
                </div>
                {/* botenes */}
                <div className={style.botones}>
                     <button className={style.boton1}>Enviar<IoIosPaperPlane/></button>
                     <button className={style.boton2}> <Link to="/UsuarioLog" className={style.salir}> Cancelar<IoCloseSharp/> </Link> </button>

                </div>
            </form>
        </section>
  )
}

export default PeticionesUsuarios

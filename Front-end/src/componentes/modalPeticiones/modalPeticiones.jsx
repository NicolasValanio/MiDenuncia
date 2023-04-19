import style from '../modalPeticiones/modalPeticiones.module.css'
import {} from 'react-icons/'

function ModalPeticiones({estadoModal,setEstadoModal}) {

    return(
        <div className={`${style.fondo} ${ estadoModal ?  null : style.open}`}>
            <div className={style.modalPeticiones}>
                <div className={`contenedor ${style.headerModal}`}>
                    <h2>Descripción de cada tipo de Petición</h2>
                    <p>A continuación puedes ver una breve descripción de cada tipo de petición, esto te puede ayudar a elegir el enfoque del problema que deseas manifestar</p>
                </div>
                <div className={`contenedor ${style.bodyModal}`}>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            Seguridad
                        </div>
                        <div>
                            Cuando tu petición se trata de asuntos que alteran la tranquilidad y seguridad en tu comunidad.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            Malla vial
                        </div>
                        <div>
                            Cuando deseas informar sobre el mal estado de alguna vía que requiere ser arreglada para evitar accidentes y/o daños a los vehículos.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            Señalización vial
                        </div>
                        <div>
                            Cuando hay problemas que afectan la movilidad vial en tu comunidad. Podría ser por una señal de transito  defectuosa o porque no hay una señal que pueda mitigar el problema.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            Espacio Público
                        </div>
                        <div>
                            Cuando percibas un problema que afecte el uso de lugares públicos como parques, andenes, etc. Podrías solicitar que se arregle algo que se encuentre en mal estado y podría afectar la integridad de las personas que lo usan.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            Alumbrado Público
                        </div>
                        <div>
                            Cuando observas que el alumbrado publico en tu comunidad se encuentra en mal estado o si consideras que se debería instalar alumbrado público en algún sector donde no haya para intentar solucionar problemas de inseguridad, movilidad, etc.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            Contaminación Ambiental
                        </div>
                        <div>
                            Cuando observas algún problema de tipo ambiental que afecta algún espacio publico de tu comunidad. Podría presentarse por afectaciones a la salud de las personas, solucionar el aspecto de los lugares públicos cuando hay acumulación de basuras, etc.
                        </div>
                    </div>
                </div>
                <div className={style.footerModal}>

                </div>
            </div>
        </div>
    )
}

export default ModalPeticiones;
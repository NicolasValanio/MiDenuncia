import { useState } from 'react';
import { useForm} from 'react-hook-form';


import style from '../modalReportes/modalReportes.module.css'
import {AiOutlineClose} from 'react-icons/ai'

function ModalReportes({estadoModal , setEstadoModal}) {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit = value => {

    }

    return(
        <div className={`${style.fondo} ${ estadoModal ? style.open : null}`}>
            <div className={style.modalOpen}>
                <div className={style.cerrar}>
                    <button className={style.boton} onClick={()=>setEstadoModal(false)}> <AiOutlineClose className={style.iconCerrar} /> </button>
                </div>
                <div className={style.modalBody}>
                    <div className={`contenedor ${style.headerBody}`}>
                        <h2 className={style.tituloReporte}>Reporte esta Publicaión</h2>
                        <p className={style.parrafoReporte}>¿ Por que deseas reportar esta publicacion?</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label className={`contenedor ${style.contResulto}`}>
                                <input type="checkbox" className={style.inputResulto} /> Ya se soluciono el problema
                            </label>
                        </div>

                        <div>
                            <label>
                                <input type="checkbox" /> Contenido Explícito
                            </label>
                            <label>
                                <input type="checkbox" /> Expresión de Odio
                            </label>
                            <label>
                                <input type="checkbox" /> Denuncia Falsa
                            </label>
                            <label>
                                <input type="checkbox" /> Abuso Verbal
                            </label>
                            <label>
                                <input type="checkbox" /> Vulnera algun Derecho
                            </label>
                            <label>
                                <input type="checkbox" />  Racismo
                            </label>
                        </div>

                        
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalReportes;
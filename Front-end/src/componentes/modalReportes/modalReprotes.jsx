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
                        <div className={`contenedor ${style.cont_checkbox}`}>
                            <label className={`contenedor ${style.labelResulto}`}>
                                <input type="checkbox" className={`${style.checkbox} ${style.checkResulto}`} /> Ya se soluciono el problema
                            </label>
                        </div>

                        <div className={`contenedor ${style.cont_checkbox}`}>
                            <label className={style.labelCheck}>
                                <input className={`${style.checkbox}`} type="checkbox" /> Contenido Explícito
                            </label>
                            <label className={style.labelCheck}>
                                <input className={`${style.checkbox}`} type="checkbox" /> Expresión de Odio
                            </label>
                            <label className={style.labelCheck}>
                                <input className={`${style.checkbox}`} type="checkbox" /> Denuncia Falsa
                            </label>
                            <label className={style.labelCheck}>
                                <input className={`${style.checkbox}`} type="checkbox" /> Abuso Verbal
                            </label>
                            <label className={style.labelCheck}>
                                <input className={`${style.checkbox}`} type="checkbox" /> Vulnera algun Derecho
                            </label>
                            <label className={style.labelCheck}>
                                <input className={`${style.checkbox}`} type="checkbox" />  Racismo
                            </label>
                            <label className={style.labelTextArea}>
                                <textarea className={style.textArea} name="" id="" cols="33" rows="5"></textarea>
                            </label>
                        </div>

                        <div>
                            <button className={`btn`}>REPORTAR</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalReportes;
import { useState } from 'react';
import { useForm} from 'react-hook-form';


import style from '../modalReportes/modalReportes.module.css'
import {AiOutlineClose} from 'react-icons/ai'

function ModalReportes({estadoModal , setEstadoModal}) {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit = value => {
        console.log('si');
        console.log(value);
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

                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                type="radio" className={`${style.checkbox} ${style.checkResulto}`} value='solucionado'/> Ya se soluciono el problema
                            </label>

                        </div>

                        <div className={`contenedor ${style.cont_checkbox}`}>
                            
                            <label className={style.labelCheck}>
                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                className={`${style.checkbox}`} type="radio"  value='contenidoExplicito' /> Contenido Explícito
                            </label>
                            <label className={style.labelCheck}>
                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                className={`${style.checkbox}`} type="radio"  value='expresionOdio' /> Expresión de Odio
                            </label>
                            <label className={style.labelCheck}>
                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                className={`${style.checkbox}`}  type="radio"  value='DenunciaFalsa' /> Denuncia Falsa
                            </label>
                            <label className={style.labelCheck}>
                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                className={`${style.checkbox}`} type="radio"  value='abusoVerbal'  /> Abuso Verbal
                            </label>
                            <label className={style.labelCheck}>
                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                className={`${style.checkbox}`}  type="radio" value='vueneraDerecho' /> Vulnera algun Derecho
                            </label>
                            <label className={style.labelCheck}>
                                <input {...register("RadioReporte",{required: 'seleccione algun problema'})}  
                                className={`${style.checkbox}`} type="radio"  value='reacismo' />  Racismo
                            </label>
                            <label className={style.labelTextArea}>
                                <textarea {...register("textoReporte")}
                                className={style.textArea} cols="33" rows="5" placeholder='Cuéntanos mas detalles del por qué consideras inadecuada la publicación'></textarea>
                            </label>
                        </div>

                        <div className={`contenedor ${style.cont_boton}`}>
                            <button type="submit" className={`btn`} >REPORTAR</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalReportes;
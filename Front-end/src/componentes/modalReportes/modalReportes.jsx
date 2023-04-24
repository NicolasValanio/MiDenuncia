import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useForm} from 'react-hook-form';
import Style from './modalReportes.module.css'

export default function ModalReportes({estadoModal, setEstadoModal, children}) {

  function closeModal () {
    setEstadoModal(false)
  }

      
  const {register,handleSubmit,formState:{errors}} = useForm()

  const onSubmit = value => {
      console.log('si');
      console.log(value);
  }

  return (
    <>
      <Transition appear show={estadoModal} as={Fragment}>
        <Dialog as="div" className={Style.modal} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={Style.enter}
            enterFrom={Style.enterLeave}
            enterTo={Style.enterTo}
            leave={Style.leave}
            leaveFrom={Style.enterTo}
            leaveTo={Style.enterLeave}
          >
            <div className={Style.fixedDiv} />
          </Transition.Child>

          <div className={Style.fixedDiv}>
            <div className={Style.divChil}>
              <Transition.Child
                as={Fragment}
                enter={Style.enter}
                enterFrom={Style.fromLeaveTo}
                enterTo={Style.enterToFrom}
                leave={Style.leave}
                leaveFrom={Style.enterToFrom}
                leaveTo={Style.fromLeaveTo}
              >
                <Dialog.Panel className={Style.modalOpen}>
                  <Dialog.Title
                    as="h3"
                    className={Style.dialogtitle}
                  >
                  </Dialog.Title>

                    <div className={Style.cerrar}>
                        <button className={Style.boton} onClick={()=> setEstadoModal(!estadoModal)}> <AiOutlineClose className={Style.iconCerrar} /> </button>
                    </div>
                    <div className={Style.modalBody}>
                        <div className={`contenedor ${Style.headerBody}`}>
                            <h2 className={Style.tituloReporte}>Reporte esta Publicaión</h2>
                            <p className={Style.parrafoReporte}>¿ Por que deseas reportar esta publicacion?</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className={Style.cont_checkbox}>
                                <div className={Style.checkboxdi}>
                                   <label className={`contenedor ${Style.labelResulto}`}>

                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                       type="radio" className={`${Style.checkbox} ${Style.checkResulto}`} value='solucionado'/> Ya se soluciono el problema
                                    </label>
                                  
                                  <label className={Style.labelCheck}>
                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                      className={`${Style.checkbox}`} type="radio"  value='contenidoExplicito' /> Contenido Explícito
                                  </label>
                                  <label className={Style.labelCheck}>
                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                      className={`${Style.checkbox}`} type="radio"  value='expresionOdio' /> Expresión de Odio
                                  </label>
                                  <label className={Style.labelCheck}>
                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                      className={`${Style.checkbox}`}  type="radio"  value='DenunciaFalsa' /> Denuncia Falsa
                                  </label>
                                </div>

                                <div className={Style.checkboxdi}>
                                  <label className={Style.labelCheck}>
                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                      className={`${Style.checkbox}`} type="radio"  value='abusoVerbal'  /> Abuso Verbal
                                  </label>
                                  <label className={Style.labelCheck}>
                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})} 
                                      className={`${Style.checkbox}`}  type="radio" value='vueneraDerecho' /> Vulnera algun Derecho
                                  </label>
                                  <label className={Style.labelCheck}>
                                      <input {...register("RadioReporte",{required: 'seleccione algun problema'})}  
                                      className={`${Style.checkbox}`} type="radio"  value='reacismo' />  Racismo
                                  </label>
                                </div>
                            </div>
                            <div className={Style.cont_textarea}>
                              <label className={Style.labelTextArea}>
                                      <textarea {...register("textoReporte")}
                                      className={Style.textArea} cols="63" rows="5" placeholder='Cuéntanos mas detalles del por qué consideras inadecuada la publicación'></textarea>
                              </label>
                            </div>

                            <div className={Style.cont_boton}>
                                <button type="submit" className={Style.btn}>REPORTAR</button>
                            </div>
                            
                        </form>
                    </div>   

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


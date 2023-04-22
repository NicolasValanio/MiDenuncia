import style from '../modalPeticiones/modalPeticiones.module.css'
import { AiFillAlert } from "react-icons/ai";
import { TbRoad } from "react-icons/tb";
import { BsFillSignStopFill } from "react-icons/bs";
import { BsFillTreeFill } from "react-icons/bs";
import { GiDoubleStreetLights  } from "react-icons/gi";
import { TbRecycleOff } from "react-icons/tb";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalReportes({estadoModal, setEstadoModal,}) {

    function closeModal () {
      setEstadoModal(false)
    }
    return(
    <>
        <Transition appear show={estadoModal} as={Fragment}>
        <Dialog as="div" className={style.modal} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={style.enter}
            enterFrom={style.enterLeave}
            enterTo={style.enterTo}
            leave={style.leave}
            leaveFrom={style.enterTo}
            leaveTo={style.enterLeave}
          >
            <div className={style.fixedDiv} />
          </Transition.Child>

          <div className={style.fixedDiv}>
            <div className={style.divChil}>
              <Transition.Child
                as={Fragment}
                enter={style.enter}
                enterFrom={style.fromLeaveTo}
                enterTo={style.enterToFrom}
                leave={style.leave}
                leaveFrom={style.enterToFrom}
                leaveTo={style.fromLeaveTo}
              >
                <Dialog.Panel className={style.modalOpen}>
                  <Dialog.Title
                    as="h3"
                    className={style.dialogtitle}
                  >
                  </Dialog.Title>
                <div className={`contenedor ${style.headerModal}`}>
                    <h2>Descripción de cada tipo de Petición</h2>
                    <p>A continuación puedes ver una breve descripción de cada tipo de petición, esto te puede ayudar a elegir el enfoque del problema que deseas manifestar</p>
                </div>
                <div className={`contenedor ${style.bodyModal}`}>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            <AiFillAlert /> Seguridad
                        </div>
                        <div>
                            Cuando tu petición se trata de asuntos que alteran la tranquilidad y seguridad en tu comunidad.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                           <TbRoad/> Malla vial
                        </div>
                        <div>
                            Cuando deseas informar sobre el mal estado de alguna vía que requiere ser arreglada para evitar accidentes y/o daños a los vehículos.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            <BsFillSignStopFill /> Señalización vial
                        </div>
                        <div>
                            Cuando hay problemas que afectan la movilidad vial en tu comunidad. Podría ser por una señal de transito  defectuosa o porque no hay una señal que pueda mitigar el problema.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            <BsFillTreeFill /> Espacio Público
                        </div>
                        <div>
                            Cuando percibas un problema que afecte el uso de lugares públicos como parques, andenes, etc. Podrías solicitar que se arregle algo que se encuentre en mal estado y podría afectar la integridad de las personas que lo usan.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            <GiDoubleStreetLights /> Alumbrado Público
                        </div>
                        <div>
                            Cuando observas que el alumbrado publico en tu comunidad se encuentra en mal estado o si consideras que se debería instalar alumbrado público en algún sector donde no haya para intentar solucionar problemas de inseguridad, movilidad, etc.
                        </div>
                    </div>
                    <div className={`contenedor ${style.explicacion}`}>
                        <div>
                            <TbRecycleOff /> Contaminación Ambiental
                        </div>
                        <div>
                            Cuando observas algún problema de tipo ambiental que afecta algún espacio publico de tu comunidad. Podría presentarse por afectaciones a la salud de las personas, solucionar el aspecto de los lugares públicos cuando hay acumulación de basuras, etc.
                        </div>
                    </div>
                </div>
                <div className={style.footerModal}>
                    <button onClick={()=> setEstadoModal(!estadoModal)}>CONTINUAR</button>
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
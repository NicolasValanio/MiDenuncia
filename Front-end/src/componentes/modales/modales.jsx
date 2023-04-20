import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Style from './modales.module.css'

export default function Modales({isOpen, setIsOpen, children}) {

  function closeModal () {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className={Style.dialPanel}>
                  <Dialog.Title
                    as="h3"
                    className={Style.dialogtitle}
                  >
                    Ayúdanos a mejorar nuestra aplicación
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


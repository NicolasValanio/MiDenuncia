import style from './vistaUsuario.module.css';
import Modales from '../modales/modales'
import React, { useEffect, useState } from "react";






function EditarPerfil({dato}) {
    console.log(dato);

    // let {name, last_name, nickname} = dato;
       

    const [mostraDatos, setMostrarDatos]= useState(false);
    const [cambiarContrasenia, setCambiarContrasenia] = useState(false)

    

    
    function abrirModal(evet) {
        evet.preventDefault()
        setCambiarContrasenia(true)
    };
    function cerrarModal() {
        setCambiarContrasenia(false);
    }
  

    function handleClick(e) {
        e.preventDefault()
        setMostrarDatos(true)
    }
    function closeModal() {
        setMostrarDatos(false);
    }
    



    return(
        <div className={style.main_container}>

                <Modales isOpen={mostraDatos} setIsOpen={setMostrarDatos} title="Seguro que desea eliminar la cuenta">
                    <div className={style.modal}>
                            <img className={style.gifimagen} src="./src/componentes/vistaUsuario/images/mundo.gif" alt=""/>

                            <div className={style.inputverificar}>
                                <input type="button" value="Cancelar" className={`btn ${style.botonesmodal}`} onClick={closeModal}/>
                                <input type="button" value="Aceptar" className={`btn ${style.botonesmodal}`}  />
                            </div>
                    </div>
                </Modales> 

                <Modales  isOpen={cambiarContrasenia} setIsOpen={setCambiarContrasenia} title = "Ingrese su nueva contraseña" >
                    <div className={style.modalContainer}>

                    <div className={style.modal2}>
                        <label htmlFor="">Contraseña
                        <input className={style.inputdatos} type="text" />
                        </label>
                        
                        <label htmlFor="">Confirmar contraseña
                        <input className={style.inputdatos} type="text" />
                        </label>
                        <div className={style.inputverificar2}>
                                <input type="button" value="guardar" className={`btn ${style.botonesmodal2}`} />
                                <input type="button" value="Ir atras" className={`btn ${style.botonesmodal2}`} onClick={cerrarModal} />
                            </div>
                    </div>
                    </div>


                </Modales>

                
            
            <div className={style.containerEditarPerfil}>



                <h1>Editar perfil</h1>



                <form  className={style.formulario}>
                    <div className={style.datosFila1}>
            

                        <label htmlFor="">Nombre
                            <input placeholder={dato.name}  className={style.inputdatos} type="text" />
                        </label>
                        

                        <label htmlFor="">Apellido                           
                            <input placeholder={0} className={style.inputdatos} type="text" />
                        </label>
                        <div className={style.inputButon}>
                            <button className={`btn ${style.botonGuardar}`}>
                                Guardar cambios
                            </button>
                            <button className={`btn ${style.elimCuenta}`} onClick={handleClick}>
                                Eliminar cuenta
                            </button> 
                        </div>

                    </div>
                    <div  className={style.datosFila1}>
                        
                        <label htmlFor="">Usuario
                            <input placeholder={0} className={style.inputdatos} type="text" />
                        </label>


                        <h4 className={style.cambiarpassword}>
                            Si desea cambiar la contraseña 
                            <input type="button" value="¡Haz clic aquí !"  onClick={abrirModal} className={style.clikcontraseña}   />
                        
                        </h4>
                        


                    </div>

                </form>

        
            </div>


            </div>

        
    )
    
}






export default EditarPerfil
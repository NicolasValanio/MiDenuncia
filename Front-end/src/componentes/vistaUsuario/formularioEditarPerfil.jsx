import style from './vistaUsuario.module.css';
import Modales from '../modales/modales'
import React, { useEffect, useState } from "react";






function EditarPerfil({dato}) {

    let {name,last_name,nickname}=dato
    
    
    

    const [mostraDatos, setMostrarDatos]= useState(false);
    // const [cambContrasenia, setCambiarContrasenia] = useState(false)

    // function clinContrasenia (contra){
    //     contra.preventDefault()
    //     setCambiarContrasenia(true)
    // }


    

    function handleClick(e) {
        e.preventDefault()
        setMostrarDatos(true)
    }
    function closeModal() {
        setMostrarDatos(false);
    }
    console.log(dato);



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

                
            
            <div className={style.containerEditarPerfil}>



                <h1>Editar perfil</h1>



                <form  className={style.formulario}>
                    <div className={style.datosFila1}>
            

                        <label htmlFor="">Nombre
                            <input placeholder={name}  className={style.inputdatos} type="text" />
                        </label>
                        

                        <label htmlFor="">Apellido                           
                            <input placeholder={last_name} className={style.inputdatos} type="text" />
                        </label>
                        <div className={style.inputButon}>
                            <button className={style.botonGuardar}>
                                Guardar cambios
                            </button>
                            <button className={style.elimCuenta} onClick={handleClick}>
                                Elininar cuenta
                            </button> 
                        </div>

                    </div>
                    <div  className={style.datosFila1}>
                        
                        <label htmlFor="">Usuario
                            <input placeholder={nickname} className={style.inputdatos} type="text" />
                        </label>


                        <h4 className={style.cambiarpassword}>
                            Si desea cambiar la contraseña de  <h3 onClick={} className={style.clikcontraseña}>
                                Click aquí
                            </h3>
                        </h4>
                    
{/* 
                        <label htmlFor="">Contraseña
                        <input placeholder={password} className={style.inputdatos} type="text" />
                        </label>
                        
                        <label htmlFor="">Confirmar contraseña
                        <input className={style.inputdatos} type="text" />
                        </label>
                                     */}

                    </div>

                </form>

        
            </div>


            </div>

        
    )
    
}






export default EditarPerfil
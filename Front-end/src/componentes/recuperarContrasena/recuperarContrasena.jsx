import React, { useState } from "react";
import style from "./recuperarContrasena.module.css"
import {EnvioEmailResetpassword} from '../baseDeDatos'

////iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';
///fin

import { useForm} from 'react-hook-form';
import { AiOutlineUser } from "react-icons/ai";
import { Link,useNavigate  } from 'react-router-dom'



    

function RecuperarContrasena() {
    const { register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const [infoEmail, setInfoEmail]=useState([''])

// FUNCION PARA HACER EN ENVIO DE LOS DATOS 

//------------------------------------------------------------------------------------------

    const onSubmit = async(valor) =>{
       await EnvioEmailResetpassword(valor)
        .then(res => {
            
            setInfoEmail([res.data.message, res.data.message2])
        })
        .catch(err => {
           // console.log()
           setInfoEmail(err.response.data)
        })
       
     
        //navigate("/login");
    }

    const errorEmail={
        color:"white",
       
    }
    const infoEmailEnviado={
        color:"white",
        
    }


    return(
        
         <div className={`contenedor ${style.registroUsuarios_contenedor}`}>
            <div  className={`contenedor ${style.registroUsuarios}`}>

                <div className={`contenedor ${style.contenedor_top}`}>
                    <h2 className={style.tituloRegistre}>MI DENUNCIA</h2>
                    <p className={style.tituloRegistreContrasena}>Recupera tu contraseña</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_registrar}`}>

                    
                       

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("email",{
                            required: {
                                value: true,
                                message : "El correo es requerido"
                            },
                            pattern: {
                                value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                                message : "El formato no es correcto"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="ingresar correo" />
                        {errors.email && <span className={style.error}>{errors.email.message}</span>}
                         { infoEmail && infoEmail.message && <span style={errorEmail} className={style.error}>{infoEmail.message} <FontAwesomeIcon className={style.iconCheckBad}  icon={faTimes} /></span>}
                        <div className={infoEmail[0] && infoEmail[0] && style.infoEmailEnviado}>
                        { infoEmail[0] && infoEmail[0] && <span style={infoEmailEnviado} className={style.error}>{infoEmail[0]} <FontAwesomeIcon className={style.iconCheck} icon={faCheck} /></span>} <br />
                        { infoEmail[1] && infoEmail[1] && <span style={infoEmailEnviado} className={style.error}>{infoEmail[1]}</span>}
                        </div>
                    </label>

                   
 
                    <div className={`contenedor ${style.contenedor_boton}`}>
                        <button type="submit" className={`btn ${style.btnResgistrar}`}>Enviar</button>
                    </div>

                </form>

               
            </div>  
            {/* <h1> RECUPERARCONTRASEÑA</h1> */}
        </div>
           
        
    )
}

export default RecuperarContrasena
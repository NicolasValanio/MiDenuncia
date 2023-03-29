import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {EnvioEmailResetpassword} from '../baseDeDatos'


import style from './contrasenaNueva.module.css';

import { useForm} from 'react-hook-form';
import { AiOutlineUser } from "react-icons/ai";
import { Link,useNavigate  } from 'react-router-dom'



function ContrasenaNueva() {
    const { register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

    const [mostrarContrasena, setmostrarContrasena] = useState([false,false]);
    const handleShowPassword = () => {
        setShowPassword(!mostrarContrasena);
      };

    const onSubmit = valor =>{
          EnvioResgistrarBd(valor) 
         // navigate("/login");
      }
      
      return (
          <div className={`contenedor ${style.registroUsuarios_contenedor}`}>
              <div  className={`contenedor ${style.registroUsuarios}`}>
      
                  <div className={`contenedor ${style.contenedor_top}`}>
                      <h2 className={style.tituloRegistre}>MI DENUNCIA</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_registrar}`}>
      
                     
      
                    
                     <div className={style.inputsPassword}>
                        <div className={style.boton_inputs}>
                            <div className={style.div_input}>
                            <AiOutlineUser className={style.iconRegister}/>
                            <label className={style.label} htmlFor="password" >
                                <input id="password" type={mostrarContrasena[0] ? 'text' : 'password'}
                                {...register("password",{ 
                                        required: {
                                        value: true,
                                        message : "La contrasea es requerido"
                                    },
                                    minLength: {
                                        value : 6,
                                        message : "La contraseña debe tener mas de 6 caracteres"
                                    }
                                })} 
                            
                                className={style.inputRegister} placeholder="Nueva contraseña"  />
                                
                                
                            </label>
                        <button className={style.iconEye} onClick={() => setmostrarContrasena([!mostrarContrasena[0],mostrarContrasena[1]])}>
                                
                                <FontAwesomeIcon className={style.iconEye} icon={mostrarContrasena[0] ? faEye : faEyeSlash} />
                        </button>
                            </div>
                      {errors.password && <span className={style.error}> {errors.password.message} </span>}
                     </div>
                     
      
      
                    <div className={style.div_input} >
                    <AiOutlineUser className={style.iconRegister}/>
                    <label className={style.label} >
                          <input htmlFor="password2" id="password2"  type={mostrarContrasena[1] ? 'text' : 'password'}
                           {...register("password2",{
                                required: {
                                  value: true,
                                  message : "La confirmacion de la contraseña es requerida"
                              },
                              minLength: {
                                  value : 6,
                                  message : "La contraseña debe tener mas de 6 caracteres"
                              }
                          })} 
                           className={style.inputRegister} placeholder="Confirmar Contraseña" />
                          
                          
                      </label>
                      <button className={style.iconEye} onClick={() => setmostrarContrasena([mostrarContrasena[0],!mostrarContrasena[1]])}>
                              
                                 <FontAwesomeIcon  icon={mostrarContrasena[1] ? faEye : faEyeSlash} />
                        </button>
                    </div>
                    {errors.password2 && <span className={style.error}> {errors.password2.message} </span>}
                      
                     </div>
      
                      <div className={`contenedor ${style.contenedor_boton}`}>
                          <button type="submit" className={`btn ${style.btnResgistrar}`}>Enviar</button>
                      </div>
      
                  </form>
      
                  
              </div>  
          </div>
      )
}

export default ContrasenaNueva


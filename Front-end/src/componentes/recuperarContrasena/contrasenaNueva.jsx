import React, { useState } from "react";
import {EnvioEmailResetpassword} from '../baseDeDatos'


import style from './contrasenaNueva.module.css';

import { useForm} from 'react-hook-form';
import { AiOutlineUser } from "react-icons/ai";
import { Link,useNavigate  } from 'react-router-dom'



function ContrasenaNueva() {
    const { register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

    const [mostrarContrasena, setmostrarContrasena] = useState(false);
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
                     <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                          <input {...register("password",{ 
                                required: {
                                  value: true,
                                  message : "La contrasea es requerido"
                              },
                              minLength: {
                                  value : 6,
                                  message : "La contraseña debe tener mas de 6 caracteres"
                              }
                          })} 
                          type="password" className={style.inputRegister} placeholder="Nueva contraseña" />
                          {errors.password && <span className={style.error}> {errors.password.message} </span>}
                      </label>
      
      
                      <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                          <input {...register("password2",{
                                required: {
                                  value: true,
                                  message : "La confirmacion de la contraseña es requerida"
                              },
                              minLength: {
                                  value : 6,
                                  message : "La contraseña debe tener mas de 6 caracteres"
                              }
                          })} 
                          type="password" className={style.inputRegister} placeholder="Confirmar Contraseña" />
                          {errors.password2 && <span className={style.error}> {errors.password2.message} </span>}
                      </label>
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


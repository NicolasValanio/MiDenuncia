import React from "react";
import style from './RegistroUsuario.module.css'
import {EnvioResgistrarBd} from '../baseDeDatos'

import { useForm} from 'react-hook-form';
import { AiOutlineUser } from "react-icons/ai"
import {GiDualityMask} from "react-icons/gi"
import {RiLockPasswordLine} from "react-icons/ri"
import {BsMailbox} from "react-icons/bs"
import "animate.css";
import { Link,useNavigate  } from 'react-router-dom'


function RegistroUsuario() {

    const { register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

// FUNCION PARA HACER EN ENVIO DE LOS DATOS 

//------------------------------------------------------------------------------------------

    const onSubmit = valor =>{
        EnvioResgistrarBd(valor) 
        navigate("/login");
    }

    return (
        <div className={`contenedor ${style.registroUsuarios_contenedor}`}>
            <div  className={`contenedor ${style.registroUsuarios}`}>

                <div className={`contenedor ${style.contenedor_top}`}>
                    <h2 className={style.tituloRegistre}>MI DENUNCIA</h2>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_registrar}`}>

                    <label htmlFor="name" className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("name",{
                            required: {
                                value: true,
                                message : "El nombre es requerido"
                            },
                            pattern: {
                                value : /[a-zA-Z]\d*/,
                                message : "El nombre debe tener letras"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Nombre" />
                        {errors.name && <span className={style.error}>{errors.name.message}</span>}
                    </label>

                    <label className={style.label} ><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("last_name",{
                              required: {
                                value: true,
                                message : "El apellido es requerido"
                            },
                            pattern: {
                                value : /[a-zA-Z]\d*/,
                                message : "El apellido debe tener letras"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Apellido" />
                        {errors.last_name && <span className={style.error}> {errors.last_name.message} </span>}
                    </label>

                    <label className={style.label}><GiDualityMask className={style.iconRegister}/>
                        <input {...register("nickname",{
                              required: {
                                value: true,
                                message : "El usuario es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "El usuario es requerido"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Nombre Usuario" />
                        {errors.nickname && <span className={style.error}> {errors.nickname.message} </span>}
                    </label>

                    <label className={style.label}><BsMailbox className={style.iconRegister}/>
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
                        type="text" className={style.inputRegister} placeholder="Correo" />
                        {errors.email && <span className={style.error}>{errors.email.message}</span>}
                    </label>

                    <label className={style.label}><RiLockPasswordLine className={style.iconRegister}/>
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
                        type="password" className={style.inputRegister} placeholder="Contraseña" />
                        {errors.password && <span className={style.error}> {errors.password.message} </span>}
                    </label>

                    <label className={style.label}><RiLockPasswordLine className={style.iconRegister}/>
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
 
                    <div className={`contenedor ${style.contenedor_boton}`}>
                        <button type="submit" className={`btn ${style.btnResgistrar} animate__animated animate__backInUp`}>Registrarse</button>
                    </div>

                </form>

                <div className={`contenedor ${style.contenedor_bottom}`}>
                        <p className={style.textoRegister}>¿Ya estás Registrado? <samp className={style.samp}><Link className={style.link} to="/login">Iniciar Sesión</Link></samp></p>
                </div>
            </div>  
        </div>
    )
}

export default RegistroUsuario;

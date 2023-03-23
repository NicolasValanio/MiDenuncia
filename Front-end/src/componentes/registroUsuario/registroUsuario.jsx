import React from "react";
import  {registroBd}  from '../baseDedatos'
import style from './RegistroUsuario.module.css'

import { useForm} from 'react-hook-form';
import { AiOutlineUser } from "react-icons/ai";
import { Link,useNavigate  } from 'react-router-dom'


function RegistroUsuario() {

    const { register, handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = valor =>{
        console.log(valor);
        registroBd(valor) 
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
                                message : "el nombre es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "el nombre es requerido"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Nombre" />
                        {errors.name && <span className={style.error}>{errors.name.message}</span>}
                    </label>

                    <label className={style.label} ><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("last_name",{
                              required: {
                                value: true,
                                message : "el Apellido es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "el Apellido es requerido"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Apellido" />
                        {errors.last_name && <span className={style.error}> {errors.last_name.message} </span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("nickname",{
                              required: {
                                value: true,
                                message : "el usuario es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "el usuario es requerido"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Nombre Usuario" />
                        {errors.nickname && <span className={style.error}> {errors.nickname.message} </span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("email",{
                            required: {
                                value: true,
                                message : "el correo es requerido"
                            },
                            pattern: {
                                value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                                message : "El formato no es correcto"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Correo" />
                        {errors.email && <span className={style.error}>{errors.email.message}</span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("password",{ 
                              required: {
                                value: true,
                                message : "la contrasea es requerido"
                            },
                            minLength: {
                                value : 6,
                                message : "la contraseña debe tener mas de 6 caracteres"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Contraseña" />
                        {errors.password1 && <span className={style.error}> {errors.password1.message} </span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("password2",{
                              required: {
                                value: true,
                                message : "La confirmacion de la contraseña es requerida"
                            }
                        })} 
                        type="text" className={style.inputRegister} placeholder="Confirmar Contraseña" />
                        {errors.password2 && <span className={style.error}> {errors.password2.message} </span>}
                    </label>
 
                    <div className={`contenedor ${style.contenedor_boton}`}>
                        <button type="submit" className={`btn ${style.btnResgistrar}`}>Registrarse</button>
                    </div>

                </form>

                <div className={`contenedor ${style.contenedor_bottom}`}>
                        <p className={style.textoRegister}>¿Ya estas Registrado? <samp className={style.samp}><Link className={style.link} to="/login">Inicar Sesión</Link></samp></p>
                </div>
            </div>  
        </div>
    )
}

export default RegistroUsuario;
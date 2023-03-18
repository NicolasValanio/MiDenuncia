import React from "react";
import  Basededatos  from '../baseDedatos'
import style from './RegistroUsuario.module.css'

import { useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'


function RegistroUsuario() {

    const { register, handleSubmit,formState:{errors}} = useForm();

    const onSubmit = valor =>{
        console.log(valor)
        Basededatos(valor) 
    }

    return (
        <div className={`contenedor ${style.registroUsuarios_contenedor}`}>
            <div  className={`contenedor ${style.registroUsuarios}`}>

                <div className={`contenedor ${style.contenedor_top}`}>
                    <h2 className={style.tituloRegistre}>MI DENUNCIA</h2>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_registrar}`}>

                    <label htmlFor="name" className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("name",{required: "Porfavor ingrese un nombre", })} type="text" className={style.inputRegister} placeholder="Nombre" />
                        {errors.name && <span className={style.error}>el nombre es requerido</span>}
                    </label>

                    <label className={style.label} ><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("last_name",{required: "true"} ,)} type="text" className={style.inputRegister} placeholder="Apellido" />
                        {errors.last_name && <span className={style.error}>el apellido es requerido</span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("nickname",{required: "true"})} type="text" className={style.inputRegister} placeholder="Nombre Usuario" />
                        {errors.nickname && <span className={style.error}>el usuario es requerido</span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("email",{required: "true"})} type="text" className={style.inputRegister} placeholder="Correo" />
                        {errors.email && <span className={style.error}>el correo es requerido</span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("password1",{required: "true" })} type="text" className={style.inputRegister} placeholder="Contraseña" />
                        {errors.password1 && <span className={style.error}>la contraseña es requerido</span>}
                    </label>

                    <label className={style.label}><AiOutlineUser className={style.iconRegister}/>
                        <input {...register("password2",{required: "true"})} type="text" className={style.inputRegister} placeholder="Confirmar Contraseña" />
                        {errors.password2 && <span className={style.error}>la confimacion de la contraseña es requerido</span>}
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
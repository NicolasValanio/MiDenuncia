import React from "react";
import style from './login.module.css'
import general from '../../App.module.css'

import { Link } from 'react-router-dom'
import { AiOutlineUser,AiOutlineLock,AiFillGoogleCircle } from "react-icons/ai";
import { useForm} from 'react-hook-form';

function Login() {

    const {register,handleSubmit,errors} = useForm()

    const onSubmit = value =>{
        console.log(value)

    }

    return (
        <div className={general.contenedor}>
            <div className="contenedor login">

                <div className="contenedor contenedor-top">
                    <h2 className="tituloLoginRegistre">MI DENUNCIA</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="contenedor formulario-login">

                    <label ><AiOutlineUser className="iconsFrom iconLogin"/>
                        <input {...register("usuario",{required:"true"})} type="text" className="inputsForm inputLogin" placeholder="Usuario o Correo" />
                    </label>
                    <label ><AiOutlineLock className="iconsFrom iconLogin"/>
                        <input {...register("contraseña",{required:"true"})} type="password" className="inputsForm inputLogin" placeholder="Contraseña"/>
                    </label>

                    <button type="submit" className="btn btnLogin">Iniciar Sesión</button>
                     
                </form>
                
                <div className="contenedor contenedor-bottom">
                    <div className="contenedor cont-regiscontra">
                        <p className="textoLogin">¿No tienes Cuenta? <samp><Link to="/RegistroUsuario"> REGISTRATE</Link></samp></p>
                        <p className="textoLogin">¿Olvidaste tu <samp><Link to="/RegistroUsuario">CONTRASEÑA</Link></samp>? </p>
                    </div>
                    <div className="contenedor inicar-google"> 
                        <AiFillGoogleCircle className="google"/>
                        <p>Iniciar sesión con Google</p> 
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Login;
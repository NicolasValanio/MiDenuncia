import React from "react";
import style from './login.module.css'


import { Link } from 'react-router-dom'
import { AiOutlineUser,AiOutlineLock,AiFillGoogleCircle } from "react-icons/ai";
import { useForm} from 'react-hook-form';

function Login() {

    const {register,handleSubmit,errors} = useForm()

    const onSubmit = value =>{
        console.log(value)
        


    }

    return (
        <div className={`contenedor ${style.login_Contenedor}`}>
            <div className={`contenedor ${style.login}`}>

                <div className={`contenedor ${style.contenedor_top}`}>
                    <h2 className={style.tituloLogin}>MI DENUNCIA</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_login}`}>

                    <label className={style.label}><AiOutlineUser className={style.iconLogin}/>
                        <input {...register("usuario",{required:"true"})} type="text" className={style.inputLogin} placeholder="Usuario o Correo" />
                    </label>
                    <label className={style.label}><AiOutlineLock className={style.iconLogin}/>
                        <input {...register("contraseña",{required:"true"})} type="password" className={style.inputLogin}  placeholder="Contraseña"/>
                    </label>

                    <button type="submit" className={`btn ${style.btnLogin}`}>Iniciar Sesión</button>
                     
                </form>
                
                <div className={`contenedor ${style.contenedor_bottom}`}>
                    <div className={`contenedor ${style.cont_regiscontra}`}>
                        <p className={style.textoLogin}>¿No tienes Cuenta? <samp className={style.samp}><Link className={style.link} to="/RegistroUsuario"> REGISTRATE</Link></samp></p>
                        <p className={style.textoLogin}>¿Olvidaste tu <samp className={style.samp}><Link className={style.link} to="/RegistroUsuario">CONTRASEÑA</Link></samp>? </p>
                    </div>
                    <div className={`contenedor ${style.iniciar_google}`}> 
                        <AiFillGoogleCircle className={style.google}/>
                        <p>Iniciar sesión con Google</p> 
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Login;
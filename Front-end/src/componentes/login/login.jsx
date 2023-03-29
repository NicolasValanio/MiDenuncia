import { React,useState } from "react";
import style from './login.module.css'
import {EnvioLoginBd} from '../baseDeDatos'
import {llenardatos} from '../ProtegerRutas'



import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineUser,AiOutlineLock,AiFillGoogleCircle } from "react-icons/ai";
import { useForm} from 'react-hook-form';

function Login() {

    const {register,handleSubmit,formState:{errors}} = useForm()
    const [error,setError] = useState(null)
    // const [user , setUser] = useState(null)
    const navigate = useNavigate();

    const  onSubmit = value =>{

        EnvioLoginBd(value).then(res => {
            if (res.status === 200) {
                llenardatos(res)
                navigate('/usuarioLog')
            }
            else{
                setError(res.response.data.message)
            }
        })

    }



    return (
        <div className={`contenedor ${style.login_Contenedor}`}>
            <div className={`contenedor ${style.login}`}>

                <div className={`contenedor ${style.contenedor_top}`}>
                    <h2 className={style.tituloLogin}>MI DENUNCIA</h2>
                    <p className={style.error}> { error } </p>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={`contenedor ${style.formulario_login}`}>

                    <label className={style.label}><AiOutlineUser className={style.iconLogin}/>
                        <input {...register("nickname",{
                            required: {
                                value: true,
                                message : "el usuario es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "el usuario es requerido"
                            }
                        })} type="text" className={style.inputLogin} placeholder="Usuario o Correo" />
                        {errors.nickname && <span className={style.error}>{errors.nickname.message}</span>}
                    </label>

                    <label className={style.label}><AiOutlineLock className={style.iconLogin}/>
                        <input {...register("password",{
                            required: {
                                value: true,
                                message : "la contraseña es requerido"
                            },
                            pattern: {
                                value : true,
                                message : "la contraseña es requerido"
                            }
                        })} type="password" className={style.inputLogin}  placeholder="Contraseña"/>
                        {errors.password && <span className={style.error}>{errors.password.message}</span>}
                    </label>

                    <button type="submit" className={`btn ${style.btnLogin}`}>Iniciar Sesión</button>
                     
                </form>
                
                <div className={`contenedor ${style.contenedor_bottom}`}>
                    <div className={`contenedor ${style.cont_regiscontra}`}>
                        <p className={style.textoLogin}>¿No tienes Cuenta? <samp className={style.samp}><Link className={style.link} to="/RegistroUsuario"> REGISTRATE</Link></samp></p>
                        <p className={style.textoLogin}>¿Olvidaste tu <samp className={style.samp}><Link className={style.link} to="/recuperarContraseña">CONTRASEÑA</Link></samp>? </p>
                    </div>
                    <div className={`contenedor ${style.iniciar_google}`}> 
                        <AiFillGoogleCircle className={style.google}/>
                        <p><a className={style.a} href="http://localhost:4000/google">Iniciar sesión con Google</a></p> 
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Login;
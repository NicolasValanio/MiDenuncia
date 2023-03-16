import React from "react";
import '../hojasDeEstilo/login.css'

import { Link } from 'react-router-dom'
import { AiOutlineUser,AiOutlineLock,AiFillGoogleCircle } from "react-icons/ai";

function Login() {
    return (
        <div className="contenedor login-contenedor">
            <div className="contenedor login">

                <div className="contenedor contendor-top">
                    <h2 className="tituloLogin">MI DENUNCIA</h2>
                </div>

                <form action="" className="contenedor formulario-login">

                    <label htmlFor=""><AiOutlineUser className="iconLogin"/>
                        <input type="text" name="" id="" className="inputLogin" placeholder="Usuario o Correo"/>
                    </label>
                    <label htmlFor=""><AiOutlineLock className="iconLogin"/>
                        <input type="password" name="" id="" className="inputLogin" placeholder="Contraseña"/>
                    </label>
                    <button className="btn btnLogin">Iniciar Sesión</button>
                     
                </form>
                
                <div className="contenedor contendor-bottom">
                    <div className="contenedor cont-regiscontra">
                        <p className="textoLogin">¿No tienes Cuenta? <samp><Link to="/RegistroUsuario"> REGISTRATE</Link></samp></p>
                        <p className="textoLogin">¿Olvidaste tu? <samp><Link to="/RegistroUsuario">CONTRASEÑA</Link></samp></p>
                    </div>
                    <div className="contenedor inicar-google"> 
                        <AiFillGoogleCircle className="google" /><p>Iniciar sesión con Google</p> 
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Login;
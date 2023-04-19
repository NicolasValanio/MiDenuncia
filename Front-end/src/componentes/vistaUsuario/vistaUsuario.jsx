import React, { useState } from "react";
import {FiHome } from "react-icons/fi";
import{FaUserCircle} from "react-icons/fa"
import style from './vistaUsuario.module.css';
import { useForm} from 'react-hook-form';
import Modales from '../modales/modales'


function VistaUsuario(params) {
    const [mostraDatos, setMostrarDatos]= useState(false);

    function handleClick(e) {
        e.preventDefault()
        setMostrarDatos(true)
    }

    //   function DatosUsuario() {
  
    //     const [Conex, setConex] = useState();
    
    //     useEffect(()=>{
    //         fetch('https://midenuncia-database-production.up.railway.app/info')
    //         .then((response) => response.json())
    //         .then((infor) => setConex(infor));
    
            
    //     },[])

    //   }
     

    return(
        <div className={style.main_container} >
            
                <Modales isOpen={mostraDatos} setIsOpen={setMostrarDatos} title="Seguro que desea eliminar la cuenta">
                    <div className={style.modal}>
                        <h3>Está seguro que desea eliminar su cuenta</h3>
                        <img className={style.gifimagen} src="./src/componentes/vistaUsuario/images/mundo.gif" alt=""/>
        
                        <div className={style.inputverificar}>
                            <input type="button" value="Cancelar" className={`btn ${style.botonesmodal}`}/>
                            <input type="button" value="Aceptar" className={`btn ${style.botonesmodal}`} />
                        </div>
                    </div>
                </Modales>
                


                
                <nav className={style.nabvarview}>
                    <div className={style.contaImage}> 

                        <img className={style.imagen} src="./src/componentes/vistaUsuario/images/logo.png" alt=""/>

                    </div>  
                    <div className={style.nabiconos}>
                        <div>
                            <button href="" className={style.Iconos1}>
                                <FaUserCircle className={style.Fihome}/>
                            </button>
                        </div>
                        <div>
                            <button href="" className={style.Iconos1}>
                                <FiHome className={style.Fihome}/>
                                {/* <h4 className={style.homeIcono}>Home</h4> */}
                            </button>
                        </div>
                    </div>
                </nav>    
            
                <div className={style.containerEdiPrinipal}>

                {/* <iframe src="https://stapadblockuser./e/aVy17drW1OtxkbD/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe> */}

                        <div className={style.infoUsuario}>
                            <h3>t</h3>
                         
                        </div>
                    
                    <div className={style.containerEditarPerfil}>
                        <h1>Editar perfil</h1>
                        <form  className={style.formulario}>
                            <div className={style.datosFila1}>
                      
                            {/* {

                                Conex === undefined ? 'espera':Conex?.map((datosUser)=>{
                    // let info = Conex.result[2]
                                <div>
                                    <p>{datosUser.name }{datosUser.last_name}</p>
                                    <p>{datosUser.nickname} </p>
                                    <p>{datosUser.email}</p>
                                    <p>{datosUser.address}</p>
                                
                                </div>
                            
                        
                                })
                            }     */}



                                <label htmlFor="">Nombre
                                    <input className={style.inputdatos} type="text" />
                                </label>
                                

                                <label htmlFor="">Apellido                           
                                    <input className={style.inputdatos} type="text" />
                                </label>
                                <div className={style.inputButon}>
                                    <button className={style.botonGuardar}>
                                        Guardar cambios
                                    </button>
                                    <button className={style.elimCuenta} onClick={handleClick}>
                                        Elininar cuenta
                                    </button> 
                                </div>

                            </div>
                            <div  className={style.datosFila1}>
                                
                                <label htmlFor="">Usuario
                                    <input className={style.inputdatos} type="text" />
                                </label>
                               

                                <label htmlFor="">Contraseña
                                 <input className={style.inputdatos} type="text" />
                                </label>
                                
                                <label htmlFor="">Confirmar contraseña
                                 <input className={style.inputdatos} type="text" />
                                </label>
                                               

                            </div>

                        </form>

                        
                    </div>
                </div>
    
    
    
    
    </div>
    )
}

export default VistaUsuario;
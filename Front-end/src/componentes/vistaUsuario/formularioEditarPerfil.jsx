import style from './vistaUsuario.module.css';
import Modales from '../modales/modales'
import React, { useEffect, useState } from "react";
import { eliminarUser,actualizarUser } from "../baseDeDatos"
import { useForm } from 'react-hook-form';


import {  useNavigate} from "react-router-dom"




function EditarPerfil({dato}) {
    
    
    const [dat, setDat] = useState(dato.data);


    console.log(dat);

    let {id,name, last_name, nickname,} = dato.data;
    
    const navigate=useNavigate();
    
    const [mostraDatos, setMostrarDatos]= useState(false);
    const [cambiarContrasenia, setCambiarContrasenia] = useState(false)
    
    
    
    
    const [nick, setNick] = useState(dato.data.nickname);
    const [apellido, setApellido] = useState(dato.data.last_name);
    const [nombre, setNombre] = useState(dato.data.name);
    const [contrasena, setContrasena] = useState(dato.data.password);
    
    
    function abrirModal(evet) {
        evet.preventDefault()
        setCambiarContrasenia(true)
    };
    function cerrarModal() {
        setCambiarContrasenia(false);
    }
    
    
    function handleClick(e) {
        e.preventDefault()
        setMostrarDatos(true)
    }
    function closeModal() {
        setMostrarDatos(false);
    }

    const { register, handleSubmit,formState:{errors} ,watch} = useForm();

    function cloModal(){
        setCambiarContrasenia(false);
    }
        
        

    //     if (clave1===clave2) {
    //         
    //     }else{
    //         alert("as contraseñas ingresadas no coinsiden ")
    //     }
    // 
    
    const onSubmit = valor =>{
        navigate("/VistaUsuario");
    }

    const eliminarCuenta = async () => {
      
        const idUser=id//traemos toda la info del boton ,luego el target y luego el value ... donde se encuentra el id
       

     await eliminarUser(idUser)
     
   .then((res) => {
    
    console.log(res);
    

    navigate('/login');//redireccionamos a usuarionolog?


})
        .catch(err => console.log(err))
      
     
      }




        
    const actualizarCuenta = async (e) => {


        e.preventDefault()
  
        console.log('paso')  
        

        const idUser=id
        

        
        const datos={
            nickname:nick,
            name:nombre,
            last_name:apellido,
            password:contrasena

        }
      
        await actualizarUser(datos,idUser).then((res) => {
    
          
            

        navigate('/Vistausuario');//redireccionamos
         navigate('/Login');//redireccionamo

        
        
        
        })
                .catch(err => console.log(err))

      
     
      }


      

      



    return(
        <div className={style.main_container}>

                <Modales isOpen={mostraDatos} setIsOpen={setMostrarDatos} title="Seguro que desea eliminar la cuenta">
                    <div className={style.modal}>
                            <img className={style.gifimagen} src="./src/componentes/vistaUsuario/images/mundo.gif" alt=""/>

                            <div className={style.inputverificar}>
                                <input type="button" value="Cancelar" className={`btn ${style.botonesmodal}`} onClick={closeModal}/>
                                <input  type="button"  value="Aceptar" className={`btn ${style.botonesmodal}`} onClick={eliminarCuenta} />
                            </div>
                    </div>
                </Modales> 

                <Modales  isOpen={cambiarContrasenia} setIsOpen={setCambiarContrasenia} title = "Ingrese su nueva contraseña" >
                <div className={style.modalContainer}>

                        <form onSubmit={handleSubmit(onSubmit)} className={style.modal2}>
                            <label htmlFor="">Contraseña
                            <input className={style.inputdatos} type="password" 

                                {...register("password",{ 
                                    required: {
                                    value: true,
                                    message : "La contrasea es requerida"
                                },
                                minLength: {
                                    value : 6,
                                    message : "La contraseña debe tener mas de 6 caracteres"
                                }
                                })} 
                                    

                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}  placeholder='Contraseña'/>
                                {errors.password && <span className={style.error}> {errors.password.message} </span>}
                            </label>
                            
                            <label htmlFor="">Confirmar contraseña
                            <input className={style.inputdatos} type="password"  placeholder='Confirmar contraseña'
                                {...register("password2",{
                                    required: {
                                      value: true,
                                      message : "La confirmacion de la contraseña es requerida"
                                  },
                                      validate: (value) => {
                                          if (watch("password") !== value)
                                          return "Rectifique la contraseña"
                                          
                                  }
                                  
                              })}/>
                            {errors.password2 && <span className={style.error}> {errors.password2.message} </span>}
                            </label>
                            <div className={style.inputverificar2}>
                                    <input type="submit" value="guardar" className={`btn ${style.botonesmodal2}` }/>
                                    <input type="button" value="Ir atras" className={`btn ${style.botonesmodal2}`} onClick={cerrarModal} />
                            </div>
                        </form>
                    </div>


                </Modales>

                
            
            <div className={style.containerEditarPerfil}>



                <h1>Editar perfil</h1>



                <form  onSubmit={handleSubmit(onSubmit)} className={style.formulario}>
                    <div className={style.datosFila1}>
            

                        <label htmlFor="">Nombre
                            <input placeholder={dat.name}  className={style.inputdatos} type="text" value={nombre}
                                {...register("name",{
                                    required: {

                                    value: true,
                                    message : "El nombre es requerido"
                                },
                                pattern: {
                                    value : /[a-zA-Z]\d*/,
                                    message : "El nombre debe tener letras"
                                }
                                })}

                            onChange={(e) => setNombre(e.target.value) }/>
                            {errors.name && <span className={style.error}> {errors.name.message} </span>}
                        </label>
                        

                        <label htmlFor="">Apellido                           
                            <input placeholder={last_name} className={style.inputdatos} type="text"
                             value={apellido}

                             {...register("last_name",{
                                required: {
                                  value: true,
                                  message : "El apellido es requerido"
                              },
                              pattern: {
                                  value : /[a-zA-Z]\d*/,
                                  message : "El apellido debe tener letras"
                              }
                          })} 
                        
                          
                          onChange={(e) => setApellido(e.target.value)} />
                          {errors.last_name && <span className={style.error}> {errors.last_name.message} </span>}
                        </label>
                        <div className={style.inputButon}>
                            
                            <input type="submit" value="Guardar cambios" className={`btn ${style.botonGuardar}`} onClick={actualizarCuenta} />
                            <input type="button" value="Eliminar cuenta" className={`btn ${style.elimCuenta}`} onClick={handleClick}/>
         
                        </div>

                    </div>
                    <div  className={style.datosFila1}>
                        
                        <label htmlFor="">Usuario
                            <input placeholder={nickname} className={style.inputdatos} type="text"
                                value={nick}
                                {...register("nickname",{
                                    required: {
                                      value: true,
                                      message : "El usuario es requerido"
                                  },
                                  pattern: {
                                      value : true,
                                      message : "El usuario es requerido"
                                  }
                              })} 
                                onChange={(e) => setNick(e.target.value)} />

                            {errors.nickname && <span className={style.error}> {errors.nickname.message} </span>}

                        </label>


                        <h4 className={style.cambiarpassword}>
                            Si desea cambiar la contraseña 
                            <input type="button" value="¡Haz clic aquí !"  onClick={abrirModal} className={style.clikcontraseña}   />
                        
                        </h4>
                        


                    </div>

                </form>

        
            </div>


            </div>

        
    )
    
}






export default EditarPerfil
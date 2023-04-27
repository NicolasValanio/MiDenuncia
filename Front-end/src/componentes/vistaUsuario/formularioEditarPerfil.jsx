import style from './vistaUsuario.module.css';
import Modales from '../modales/modales'
import React, { useEffect, useState } from "react";
import { eliminarUser,actualizarUser } from "../baseDeDatos"

import {  useNavigate} from "react-router-dom"




function EditarPerfil({dato}) {
    
    
    
    let {id,name, last_name, nickname,token} = dato.data;
    
 
    const navigate=useNavigate();

    const [mostraDatos, setMostrarDatos]= useState(false);
    const [cambiarContrasenia, setCambiarContrasenia] = useState(false)

    

    
    const [nick, setNick] = useState("");
    const [apellido, setApellido] = useState("");
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");

    
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
    
    const eliminarCuenta = async () => {
      
        const idUser=id//traemos toda la info del boton ,luego el target y luego el value ... donde se encuentra el id
       

     await eliminarUser(idUser)
     
   .then((res) => {
    
    console.log(res);
    

    navigate('/');//redireccionamos a usuarionolog?


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
    
          
            
        
         navigate('/');//redireccionamos 

        
        
        
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

                    <div className={style.modal2}>
                        <label htmlFor="">Contraseña
                        <input className={style.inputdatos} type="text"
                         value={contrasena}
                         onChange={(e) => setContrasena(e.target.value)}/>
                        </label>
                        
                        <label htmlFor="">Confirmar contraseña
                        <input className={style.inputdatos} type="text" />
                        </label>
                        <div className={style.inputverificar2}>
                                <input type="button" value="guardar" className={`btn ${style.botonesmodal2}`} />
                                <input type="button" value="Ir atras" className={`btn ${style.botonesmodal2}`} onClick={cerrarModal} />
                            </div>
                    </div>
                    </div>


                </Modales>

                
            
            <div className={style.containerEditarPerfil}>



                <h1>Editar perfil</h1>



                <form  className={style.formulario}>
                    <div className={style.datosFila1}>
            

                        <label htmlFor="">Nombre
                            <input placeholder={name}  className={style.inputdatos} type="text" value={nombre}
                            onChange={(e) => setNombre(e.target.value) }/>
                        </label>
                        

                        <label htmlFor="">Apellido                           
                            <input placeholder={last_name} className={style.inputdatos} type="text"
                             value={apellido}
                             onChange={(e) => setApellido(e.target.value)} />
                        </label>
                        <div className={style.inputButon}>
                            <button className={`btn ${style.botonGuardar}`} onClick={actualizarCuenta}> Guardar cambios</button>
                            <button className={`btn ${style.elimCuenta}`} onClick={handleClick}>
                                Eliminar cuenta
                            </button> 
                        </div>

                    </div>
                    <div  className={style.datosFila1}>
                        
                        <label htmlFor="">Usuario
                            <input placeholder={nickname} className={style.inputdatos} type="text"
                             value={nick}
                             onChange={(e) => setNick(e.target.value)} />
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
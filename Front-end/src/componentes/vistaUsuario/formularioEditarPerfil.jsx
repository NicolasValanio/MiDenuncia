import style from './vistaUsuario.module.css';


function EditarPerfil({dato}) {

    function handleClick(e) {
        e.preventDefault()
        setMostrarDatos(true)
    }
    console.log(dato);


    return(


        <div className={style.containerEditarPerfil}>
            

                    <h1>Editar perfil</h1>



                    <form  className={style.formulario}>
                        <div className={style.datosFila1}>
                  

                            <label htmlFor="">Nombre
                                <input value={dato.name} className={style.inputdatos} type="text" />
                            </label>
                            

                            <label htmlFor="">Apellido                           
                                <input value={dato.last_name} className={style.inputdatos} type="text" />
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
                                <input value={dato.nickname} className={style.inputdatos} type="text" />
                            </label>
                           

                            <label htmlFor="">Contraseña
                             <input value={dato.password} className={style.inputdatos} type="text" />
                            </label>
                            
                            <label htmlFor="">Confirmar contraseña
                             <input className={style.inputdatos} type="text" />
                            </label>
                                           

                        </div>

                    </form>

                    
        </div>
    )
    
}






export default EditarPerfil
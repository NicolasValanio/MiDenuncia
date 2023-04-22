import React, { useEffect, useState } from "react";
import EditarPefil from  "./formularioEditarPerfil"
import {FiHome } from "react-icons/fi";
import{FaUserCircle} from "react-icons/fa"
import style from './vistaUsuario.module.css';
import { useForm} from 'react-hook-form';
import Modales from '../modales/modales'
import axios from 'axios';

function VistaUsuario() {
    const [mostraDatos, setMostrarDatos]= useState(false);

    // function datosInfo() {
        
    //     const [user, setUser] = useState([]);
    //     const [datosuser, setDatosuser] = useState([]);
    //      useEffect(()=>{
    //         fetch('https://midenuncia-database-production.up.railway.app/info')
    //         .then(Response=>Response.json())
    //         .then(data=>setUser(data))
    //         .catch(error => console.log(error));
    //         console.log(data)
            
    //     },[])
    //     useEffect(() => {
    //         setDatosuser(user.filter(users => users().includes('id')));
    //     }, [user]);
    // }
    
    function closeModal() {
        setMostrarDatos(false);
    }



        const [usuario, setUsuario] = useState([]);
        const [perfil, setPerfil] = useState([]);
        const [loading, setLoading] = useState(true);
        

        
        function llamardatos() {
            
            fetch('https://midenuncia-database-production.up.railway.app/info')
            .then((response) => response.json())
            .then((infor) => {
                setUsuario(infor);
                setPerfil(infor.find(x => x.id === 8))
                // console.log(perfil);      
                // return "---"+ perfil;
            })
            .finally(() => setLoading(false))
        }

        useEffect(() => {
            llamardatos()
        }, [])
        // llamardatos();
        // setPerfil(llamardatos());

        // console.log(llamardatos()); 

        // const info = [Conex, setConex] = useState();

        // useEffect(()=>{
        //     fetch('https://midenuncia-database-production.up.railway.app/info')
        //     .then((response) => response.json())
        //     .then((infor) => setConex(infor));
    
        // },[])
    // let informacionUsuario =   Conex === undefined ? 'espera':Conex?.map(poke);
    
    
      
    //  console.log(informacionUsuario);
    if (loading) return <p>Loading...</p>

    return(
        
        <div className={style.main_container} >


            <Modales isOpen={mostraDatos} setIsOpen={setMostrarDatos} title="Seguro que desea eliminar la cuenta">
                <div className={style.modal}>
                    <img className={style.gifimagen} src="./src/componentes/vistaUsuario/images/mundo.gif" alt=""/>
    
                    <div className={style.inputverificar}>
                        <input type="button" value="Cancelar" className={`btn ${style.botonesmodal}`} onClick={closeModal}/>
                        <input type="button" value="Aceptar" className={`btn ${style.botonesmodal}`}  />
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
                </div>
            </nav>    
        
            <div className={style.containerEdiPrinipal}>

                    {/* {
                        Conex === undefined ? 'espera':Conex?.map((poke)=>{
                         // let info = Conex.result[2]
                            let datousuario = poke.nickname
                            
                            
                            console.log(datousuario);
                            return(

                                <p>
                                    {datousuario}
                                    
                                </p>
                            )
                            })
                        
                    } */}
             {/* <iframe src="https://stapadblockuser./e/aVy17drW1OtxkbD/" width="800" height="600" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe> */}

                    <div className={style.infoUsuario}>
                        <h3></h3>
                     
                    </div>
                    <EditarPefil dato={perfil}/>
                
                
            </div>

    
    
    
        </div>
    )
}


export default VistaUsuario;
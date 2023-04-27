import React, { useEffect, useState } from "react";
import EditarPefil from  "./formularioEditarPerfil"
import {FiHome } from "react-icons/fi";
import{FaUserCircle} from "react-icons/fa"
import { MenuPerfil } from "../MenuPerfil/MenuPerfil";
import style from './vistaUsuario.module.css';

function VistaUsuario() {
    

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
    




        const [usuario, setUsuario] = useState([]);
        const [perfil, setPerfil] = useState([]);
        const [loading, setLoading] = useState(true);
        



        
        function llamardatos() {
            
            
            fetch('https://midenuncia-database-production.up.railway.app/info')
            .then((response) => response.json())
            .then((infor) => {
                const usuarioActual =  localStorage.getItem('usuarioLogeado')
                
                setPerfil(infor.find(x => x.id === usuarioActual.id));
                setUsuario(JSON.parse(usuarioActual));
                setPerfil(usuarioActual.perfil);
               
                // console.log(usuarioActual);
            })
            // .then((infor) => {
            //     setUsuario(infor);
            //     setPerfil(infor.find(x => x.id));
            //     // console.log(perfil);      
            //     // return "---"+ perfil;
            // })
            .finally(() => setLoading(false))
        }

        const [verin, setVerin] = useState(false);

        useEffect(() => {
            llamardatos()
        }, [])
        
        if (loading) return <p>Loading...</p>   


        

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

    return(
        
        <div>
            
            <nav className={style.nabvarview}>
                <div className={style.contaImage}> 

                    <img className={style.imagen} src="./src/componentes/vistaUsuario/images/logo.png" alt=""/>

                </div>  
                <div className={style.nabiconos}>
                    
                        <button className={style.Iconos1 } onClick={() => setVerin(!verin)}>
                            <FaUserCircle className={style.Fihome} />
                        </button>
                        {/* <button  className={style.Iconos1} >
                            <FiHome className={style.Fihome} />
                        </button> */}
                    
                </div>
            </nav>  
        
                        <MenuPerfil mostrar={verin}/>
            <div className={style.containerEdiPrinipal}>

                    <div className={style.infoUsuario}>
                        <h3>
                            {
                                usuario.data.nickname
                            }
                        </h3>
                     
                    </div>

                    <EditarPefil dato={usuario}/>
                <></>
                
            </div>

    
    
    
        </div>
    )
}


export default VistaUsuario;
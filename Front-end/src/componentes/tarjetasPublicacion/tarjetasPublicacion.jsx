import {React, useEffect, useState} from 'react'
import style from './tarjetasPublicacion.module.css'
import { userget } from './fetch';


function TarjetasPublicacion() {
   const [api,setApi] = useState()
   
   useEffect(()=>{
      userget().then(res => setApi(res.data))
   },[])

console.log(api)

   // userget().then(res => setApi(res))


   /*const[nombres,setNombre] =useState()
console.log(nombres)
   useEffect(  () =>{
 userget().then(res => setNombre(res.data.storeUser[2].user.nickname))
   }, []);

 const[descripcion,setDescripcion] =useState()
console.log(descripcion)
   useEffect(  () =>{
 userget().then(res => setDescripcion(res.data.storeRequest[2].problem))
   }, []);
    
  const[tipo,setTipo] =useState()
console.log(tipo)
   useEffect(  () =>{
 userget().then(res => setTipo(res.data.storeRequest[2].types_request.name))
   }, []);

    const[fecha,setFecha] =useState()
console.log(fecha)
   useEffect(  () =>{
 userget().then(res => setFecha(res.data.storeRequest[2].date))
   }, []);

    const[ubicacion,setUbicacion] =useState()
console.log(ubicacion)
   useEffect(  () =>{
 userget().then(res => setUbicacion(res.data.storeRequest[2].location))
   }, []);

      const[barrio,setBarrio] =useState()
console.log(barrio)
   useEffect(  () =>{
 userget().then(res => setBarrio(res.data.storeRequest[2].neighborhood))



--------ESTO TODAVIA NO FUNCIONA :((((

 {api === undefined ? 'espera': <h3>{api?.storeUser[0].user.name}
        </h3>}


        
   }, []);*/
 
 return (
   <div className={style.contenedor}>
        <div className={style.iconoUsuario} >
           <svg className={style.icono} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
        </div>

        <div className={style.nombreUsuario}>
        {api === undefined ? 'espera': <h3>{api.news[0].user.nickname} <br/>
        {api.news[0].types_request.name}
        </h3>}
        </div> 



        <div className={style.textoPublicacion}>
        {api === undefined ? 'espera': <h4>{api.news[0].problem}
        </h4>}
        </div>

        <div className={style.imagenContenedor}>
        {/* {api === undefined ? 'espera':<img  src={api.news[0].photos[0].url} alt="" width={735} height={240}></img>} */}
        </div>        
        <div className={style.fechaPublicacion}>
        {api === undefined ? 'espera': <h3>
        </h3>}
        </div>
        
        <div className={style.ubicacionPublicacion}>
        {api === undefined ? 'espera': <h3>{api.news[0].location}, {api.news[0].neighborhood}
        </h3>}
        </div>

        <div className={style.apoyoPublicacion}>
        {api === undefined ? 'espera': <h5>apoyo:   comentario: 
        </h5>}
        </div>

   



     </div>
 
  )  
}
export default TarjetasPublicacion;

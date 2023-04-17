import {React, useEffect, useState} from 'react'
import style from './tarjetasPublicacion.module.css'
import { userget } from './fetch';


function TarjetasPublicacion({api,index}) {
  console.log(api);
//    const [api,setApi] = useState()
   
//    useEffect(()=>{
//       userget().then(res => setApi(res.data))
//    },[])

// console.log(api)

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
        {api === undefined ? 'espera': <h3>{api.user.nickname} <br/>
        {api.types_request.name}
        </h3>}
        </div> 



        <div className={style.textoPublicacion}>
        {api === undefined ? 'espera': <h4>{api.problem}
        </h4>}
        </div>
        <div className={style.reporteBoton}>
        <svg className={style.reporteBotonIcono} xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
        </div>

        <div className={style.imagenContenedor}>
        {/* {api === undefined ? 'espera':<img  src={api.news[0].photos[0].url} alt="" width={735} height={240}></img>} */}
        </div>        
        <div className={style.fechaPublicacion}>
        {api === undefined ? 'espera': <h3>{api.createdAt}
        </h3>}
        </div>
        
        <div className={style.ubicacionPublicacion}>
        {api === undefined ? 'espera': <h3>{api.location}, {api.neighborhood}
        </h3>}
        </div>

        <div className={style.apoyoPublicacion}>
        {api === undefined ? 'espera': <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg> {api.support}   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> {api.comment_count} 
        </h5>}
        </div>

        <div className={style.botonComentarios}>
        <svg className={style.botonComentariosIcono} xmlns="http://www.w3.org/2000/svg"  fill="white" class="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
</svg>
        </div>

   



     </div>
 
  )  
}
export default TarjetasPublicacion;

import {React, useState,useEffect} from 'react'
import style from './tarjetasPublicacion.module.css'
import axios from 'axios'
import { userget } from './fech';

function TarjetasPublicacion() {

  const[nombres,setNombre] =useState()
console.log(nombres)
   useEffect(  () =>{
    userget().then(res => setNombre(res.data.storeUser[1].user.nickname))
   }, []);

 const[descripcion,setDescripcion] =useState()
console.log(descripcion)
   useEffect(  () =>{
    userget().then(res => setDescripcion(res.data.storeRequest[1].problem))
   }, []);
    
  const[tipo,setTipo] =useState()
console.log(tipo)
   useEffect(  () =>{
    userget().then(res => setTipo(res.data.storeRequest[1].types_request.name))
   }, []);

    const[fecha,setFecha] =useState()
console.log(fecha)
   useEffect(  () =>{
    userget().then(res => setFecha(res.data.storeRequest[1].date))
   }, []);

    const[ubicacion,setUbicacion] =useState()
console.log(ubicacion)
   useEffect(  () =>{
    userget().then(res => setUbicacion(res.data.storeRequest[1].location))
   }, []);

      const[barrio,setBarrio] =useState()
console.log(barrio)
   useEffect(  () =>{
    userget().then(res => setBarrio(res.data.storeRequest[1].neighborhood))
   }, []);
 


   /*const tarjeta  = async ()=>{
      try {
         const url='https://midenuncia-database-production.up.railway.app/infoRequestUser'
       const res= await axios.get(url);
         resdata=res;
         setData(resdata);
         console.log(res);
      } catch (error) {
         console.error(error);
      }
   }
  console.log(data)*/

   // .then(() =>{
   //    console.log("funciona");
   //    console.log(resdata);


      
   // });

  

  return (
   <div className={style.contenedor}>
        <div>
           <svg className={style.iconoUsuario} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
        </div>

        <h3 className={style.nombreUsuario}>{nombres}</h3>
        <p className={style.textoTipo}>Denuncia por : {tipo}</p>
        <p className={style.textoPublicacion}>{descripcion}</p>
        
        <div className={style.imagenContenedor}>
           <img className={style.imagen} src={'../public/grieta.jpg'} />
        </div>
        <p className={style.fechaPublicacion}>publicado el: {fecha}</p>
        <div>
           <p className={style.ubicacionPublicacion}>{barrio}, {ubicacion}</p>
        </div>
        <div>
           <p className={style.apoyoPublicacion}>apoyo</p>
        </div>



     </div>
 
  )

  }
export default TarjetasPublicacion;

  
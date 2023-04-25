import {React, useEffect, useState} from 'react'
import style from './tarjetasPublicacion.module.css'
import Style from './tarjetasPublicacion.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { userget } from './fetch';
import {HiUserCircle} from 'react-icons/hi'
import { set } from 'react-hook-form';





function TarjetasPublicacion({props,api,setEstadoModal,estadoModal}) {
  console.log(api);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const noModal = () => {
    setIsOpen(isOpen);
  };
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


        
<h2 className={style.modal_title}>{props.title}</h2>
{props.children}



   }, []);
   
   
   
   
   
   
   
   
   
   
   <div className={style.iconoUsuario} >
           <svg className={style.icono} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
        </div>

        <div className={style.nombreUsuario}>
        {api === undefined ? 'espera': <h3>{api.user.nickname} <br/>
        {api.types_request.name}
        </h3>}
        </div> 

        <div className={style.textoPublicacion}>
        {api === undefined ? 'espera': <h4>{api.problem}</h4>}
        </div>
        <div className={style.reporteBoton}>
        <svg className={style.reporteBotonIcono} xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-flag-fill" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>
        </div>

        <div className={style.imagenContenedor}>
        {api.photos[0]=== undefined ? 'espera':<img  src={api.photos[0].url} alt="" width={735} height={240}></img>} 
        </div>        
        <div className={style.fechaPublicacion}>
        {api === undefined ? 'espera': <h3>{api.createdAt}</h3>}
        </div>
        {console.log(api.photos[0])}


            <div className={style.ubicacionPublicacion}>
        {api === undefined ? 'espera': <h3>{api.location}, {api.neighborhood}</h3>}
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
   
   
   
   
   */
 
 return (
  
   <div className={style.contenedor} >
   {isOpen && (
        <div className={style.modal_overlay}>
          <div className={style.modal}>
          <div className={style.modal_header}>
              {api === undefined ? 'espera': <h3 className={style.nickname}>{api?.user?.nickname} <br/>
              {api.types_request.name}</h3>}
              <span className={style.modal_close} >&times;</span>
              </div>

            <div className={style.modal_content}>
            <div className={style.modal_parte1}>
           
              <div className={style.modal_imagen_contenedor}>
              {api.photos[0]=== undefined ? 'espera':<img  src={api.photos[0].url} alt="" width={735} height={240}></img>} 
              </div>

              <div className={style.modal_comentarios}>
               <div className={style.contenedor_comentarios}>
               <div className={style.contenedor_imagen_comentario}>
                <HiUserCircle className={style.icono_comentario}/>
                <div className={style.usuario_comentario}> usuario</div>
               </div>
               <div className={style.texto_comentario}> comentario</div>
               </div> 
              </div>
            </div>

            <div className={style.modal_parte2}>
            {api === undefined ? 'espera': <h3 className={style.textoFechaModal}>
            publicado el{api.createdAt}</h3>}

            {api === undefined ? 'espera': <h3 className={style.textoUbicacionModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>{api.location}, {api.neighborhood}</h3>}
            
            <div className={style.flex_apoyo}>
            {api === undefined ? 'espera': <h5 className={style.modal_apoyo}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#df2727e9" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg> {api.support}
            </h5>}

            {api === undefined ? 'espera': <h5 className={style.modal_comentar}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg> Comentar 
            </h5>}
            </div>

            <div className={style.barra}></div>

            <div className={style.contenedor_textos}>
            <p className={style.subtitulo}>Localizacion</p>
            <p className={style.texto_modal}>{api.location}, {api.neighborhood}</p>
            <p className={style.subtitulo}>Asunto</p>
            <p className={style.texto_modal}>{api.subject}</p>
            <p className={style.subtitulo}>descripcion</p>
            <p className={style.texto_modal}>{api.problem}</p>
            <p className={style.subtitulo}>solicitud</p>
            <p className={style.texto_modal}>{api.solution}</p>
            </div>
            </div>

          
              

            

           

      
            </div>
          </div>
        </div>
      )}

      <div className={Style.container}>
				<div className={Style.card}>
					<div className={Style.card_header}>
						<div className={Style.user}>
							<div className={Style.userImage}>
								<img src="https://picsum.photos/200/300" alt="" />
							</div>
							<div className={Style.user_info}>
                {api === undefined ? 'espera': <span className={Style.user_name}>{api?.user?.nickname}</span>}
								<span className={Style.user_status}>Denuncia por: {api.types_request.name}</span>
							</div>
						</div>
						<div className={Style.report} onClick={noModal}>
              <button onClick={()=> setEstadoModal(!estadoModal)} className={Style.button}> 
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-flag-filled"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path
									d="M4 5a1 1 0 0 1 .3 -.714a6 6 0 0 1 8.213 -.176l.351 .328a4 4 0 0 0 5.272 0l.249 -.227c.61 -.483 1.527 -.097 1.61 .676l.005 .113v9a1 1 0 0 1 -.3 .714a6 6 0 0 1 -8.213 .176l-.351 -.328a4 4 0 0 0 -5.136 -.114v6.552a1 1 0 0 1 -1.993 .117l-.007 -.117v-16z"
									stroke-width="0"
									fill="currentColor"
								></path>
							</svg>
              </button>
						</div>
					</div>
					<div className={Style.cardBody}>
						<div className={Style.description}>
							<p>
								{api === undefined ? 'espera': <span>{api.problem}</span>}
							</p>
						</div>
						<div className={Style.image}>
            {api.photos[0]=== undefined ? 'espera':<img  src={api.photos[0].url} alt=""></img>}
						</div>
					</div>
					<div className={Style.cardFooter}>
						<div className={Style.info}>
              {api === undefined ? 'espera': <p className={Style.published}>{api.createdAt}</p>}
							<div className={Style.location}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-geo-alt-fill"
									viewBox="0 0 16 16"
								>
									<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
								</svg>
                {api === undefined ? 'espera': <span>{api.location}, {api.neighborhood}</span>}
							</div>
							<div className={Style.reactions}>
								<div className={Style.likes}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-heart"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
									</svg>
                  {api === undefined ? 'espera': <span>{api.support}</span>}
                  
								</div>
								<div className={Style.numComments}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-messages"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
										<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
									</svg>
									{api === undefined ? 'espera': <span>{api.comment_count}</span>}
                   
								</div>
							</div>
						</div>
						<div className={Style.comments}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-message"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M8 9h8"></path>
								<path d="M8 13h6"></path>
								<path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>


        
    </div>
  ) 
}
export default TarjetasPublicacion;

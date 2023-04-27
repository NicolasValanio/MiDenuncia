import {React, useEffect, useState,Fragment} from 'react'
import style from './tarjetasPublicacion.module.css'
import Style from './tarjetasPublicacion.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Dialog, Transition } from '@headlessui/react'
import {HiUserCircle} from 'react-icons/hi'
import {AiOutlineSend} from 'react-icons/ai'
import {envioComentarios} from '../baseDeDatos'





function TarjetasPublicacion({api,setEstadoModal,estadoModal,setIdeReporte,setActualizarDatos,actualizarDatos}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
	setIsOpen(!isOpen);
  };

  const noModal = () => {
    setIsOpen(isOpen);
  };

  function closeModal () {
    setIsOpen(false)
  }

  async function onSubmit(comentarios) {

    if (comentarios.length !== 0 ) {
      let comentario = { description : comentarios }
      let idUsuario = JSON.parse(window.localStorage.getItem('usuarioLogeado'))
      await envioComentarios(idUsuario.data.id , api.id , comentario).then(res => res)
      setActualizarDatos(!actualizarDatos)
    }else{
      console.log('no enviar');
    }


  }

  function mostrarComentarios(api) {

        let comentarios = api.comments.map((comentario) => {
          return(
          <div className={`contenedor ${style.contenedor_comentarios}`}>
            <div className={style.contenedor_imagen_comentario}>
              <HiUserCircle className={style.icono_comentario}/>
              <div className={style.usuario_comentario}> 
                <p>{comentario.user.nickname}</p> 
              </div>
            </div>
            <div className={`contenedor ${style.texto_comentario}`}>
              <p className={style.textoComentario}>{comentario.description}</p>  
            </div>
          </div> 
          )
        })

        return comentarios

  }

  const [cora, setCora] = useState(false);
  const [contLike, setContLike] = useState(0)
  
  function ver(){

    if(cora){
      setCora(false);
      setContLike(contLike - 1);
    }
    else{
      setContLike(contLike +1);
      setCora(true);
    }
  }


 
 return (
  
   <div className={style.contenedor}>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={Style.modal} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={Style.enter}
            enterFrom={Style.enterLeave}
            enterTo={Style.enterTo}
            leave={Style.leave}
            leaveFrom={Style.enterTo}
            leaveTo={Style.enterLeave}
          >
            <div className={Style.fixedDiv} />
          </Transition.Child>

          <div className={Style.fixedDiv}>
            <div className={Style.divChil}>
              <Transition.Child
                as={Fragment}
                enter={Style.enter}
                enterFrom={Style.fromLeaveTo}
                enterTo={Style.enterToFrom}
                leave={Style.leave}
                leaveFrom={Style.enterToFrom}
                leaveTo={Style.fromLeaveTo}
              >
                <Dialog.Panel className={Style.modalOpen}>
                  <Dialog.Title
                    as="h3"
                    className={Style.dialogtitle}
                  >
                  </Dialog.Title>

        <div className={style.modal_overlay}>
          <div className={style.modal}>
            <div className={style.modal_header}>
              {api === undefined ? 'espera': <h3 className={style.nickname}>{api?.user?.nickname} <br/> {api.types_request.name}</h3>}
              <span className={style.modal_close} onClick={toggleModal}>&times;</span>
            </div>

            <div className={style.modal_content}>
              
                <div className={style.modal_parte1}>
            
                  <div className={style.modal_imagen_contenedor}>
                    {api.photos[0]=== undefined ? <img src="https://img.freepik.com/vector-gratis/diseno-plano-letrero-foto_23-2149272417.jpg?w=826&t=st=1682109936~exp=1682110536~hmac=7871fc88487058a1ef2812eea84ca12cd8c027d06a36a9443e681524edecf7be" alt="" className={style.img} /> : <img className={style.img} src={api.photos[0].url} alt=""></img>}
                  </div>

                  <div className={style.modal_comentarios}>
                    {api === undefined ? <p>Cargando Comentarios</p> : mostrarComentarios(api) }
                  </div>

                </div>

              <div className={ style.modal_parte2}>
                {api === undefined ? 'espera': <h3 className={style.textoFechaModal}>publicado el{api.createdAt}</h3>}

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

                <div className={`contenedor ${style.contTextComentar}`}>

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

 
                  <div className={`contenedor ${style.modalComentar}`}>
                    <input type="text" className={style.inputComentario} id='enviarComentario' placeholder='Comenta Aqui' />
                    <button className={style.enviarComentario} onClick={()=> onSubmit(document.querySelector('#enviarComentario').value) }> <AiOutlineSend className={style.iconEnviar} /> </button>
                  </div> 

                </div>


                <div className={style.botones_modal}>

                  {api === undefined ? 'espera': <h5 className={style.modal_apoyo}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#df2727e9" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                  </svg> {api.support}
                  </h5>}

                  {api === undefined ? 'espera': <span className={style.modal_comentar}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg> Comentar 
                  </span>}

                </div>
              </div>  
            </div>
          </div>
        </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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
              <button className={Style.button} onClick={()=>{
                setEstadoModal(!estadoModal)
                setIdeReporte(api.id)
              }} > 
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
						<div className={Style.image} onClick={toggleModal}>
            {api.photos[0]=== undefined ? <img src="https://img.freepik.com/vector-gratis/diseno-plano-letrero-foto_23-2149272417.jpg?w=826&t=st=1682109936~exp=1682110536~hmac=7871fc88487058a1ef2812eea84ca12cd8c027d06a36a9443e681524edecf7be" alt="" />:<img  src={api.photos[0].url} alt=""></img>}
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
							<div className={Style.reactions} >
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

                    className={Style.corazon}
                    onClick={ver}
                    style={cora ? {fill: "red"}:{fill: "none"}}
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
									</svg>
                  {/* {api === undefined ? 'espera': <span>{api.support}</span>} */}
                  {api === undefined ? 'espera': <span>{contLike}</span>}
                  
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

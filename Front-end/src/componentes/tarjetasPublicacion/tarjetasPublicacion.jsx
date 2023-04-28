import {React, useEffect, useState,Fragment} from 'react'
import style from './tarjetasPublicacion.module.css'
import Style from './tarjetasPublicacion.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Dialog, Transition } from '@headlessui/react'
import {HiUserCircle} from 'react-icons/hi'
import {AiOutlineSend,AiOutlineHeart} from 'react-icons/ai'
import {envioComentarios} from '../baseDeDatos'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { FaArrowCircleUp } from 'react-icons/fa'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import { FiFlag } from 'react-icons/fi'





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

    console.log(comentarios);

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
                <p>{comentario?.user?.nickname}</p> 
              </div>
            </div>
            <div className={`contenedor ${style.texto_comentario}`}>
              <p className={style.textoComentario}>{comentario?.description}</p>  
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

                {api === undefined ? 'espera': <h3 className={style.textoUbicacionModal}> <BsFillGeoAltFill /> {api.location}, {api.neighborhood}</h3>}
              
                <div className={style.flex_apoyo}>
                  
                  {api === undefined ? 'espera': <h5 className={style.modal_apoyo}> <FaArrowCircleUp className={style.iconsApoyo} /> {api.support} </h5>}

                  {api === undefined ? 'espera': <h5 className={style.modal_comentar}>  <BsFillChatLeftDotsFill className={style.iconsComentario} />  Comentar </h5>}  
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

                  {api === undefined ? 'espera': <h5 className={style.modal_apoyo}> <FaArrowCircleUp className={style.iconsApoyo} /> {api.support} </h5>}

                  {api === undefined ? 'espera': <span className={style.modal_comentar}> <BsFillChatLeftDotsFill className={style.iconsComentario} />  Comentar </span>}

                </div>

              </div>  

                <div className={`contenedor ${style.comentariosMovil}`}>

                  <div className={style.modal_comentariosMovil}>
                    {api === undefined ? <p>Cargando Comentarios</p> : mostrarComentarios(api) }
                  </div>

                 <div className={`contenedor ${style.modalComentarMovil}`}>
                    <input type="text" className={style.inputComentario} id='enviarComentarioMovil' placeholder='Comenta Aqui' />
                    <button className={style.enviarComentario} onClick={()=> onSubmit(document.querySelector('#enviarComentarioMovil').value) }> <AiOutlineSend className={style.iconEnviar} /> </button>
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
              }} > <FiFlag /> </button>
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
                  <BsFillGeoAltFill /> {api === undefined ? 'espera': <span>{api.location}, {api.neighborhood}</span>}
							</div>
							<div className={Style.reactions} >
								<div className={Style.likes}>
                  {/* {api === undefined ? 'espera': <span>{api.support}</span>} */}
                  <AiOutlineHeart />  {api === undefined ? 'espera': <span>{contLike}</span>}
								</div>
								<div className={Style.numComments}>
                  <BsFillChatLeftDotsFill className={style.tarjetaIconComentario} />  {api === undefined ? 'espera': <span>{api.comment_count}</span>}      
								</div>
							</div>
						</div>
						<div className={Style.comments}>
              <button className={Style.button} onClick={toggleModal} ><BsFillChatLeftDotsFill className={style.iconsComentario} /> </button>  
						</div>
					</div>
				</div>
			</div>


        
    </div>
  ) 
}
export default TarjetasPublicacion;

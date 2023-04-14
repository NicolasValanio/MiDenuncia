import { IoIosPaperPlane } from 'react-icons/io'
import { IoDocumentTextOutline, IoCloseSharp } from 'react-icons/io5'
import{AiFillStar} from 'react-icons/ai'
import style from './peticionesUsuarios.module.css'
/* importar el react-hook para iniciar el formulario */
import { useForm } from 'react-hook-form'
import {CiInboxOut } from "react-icons/ci";
import { enviarPeticion } from '../baseDeDatos'
import Swal from 'sweetalert2'
import { useState } from 'react';
import Loading from '../loading/Loading';
import TiposSolicitudes from './TiposSolicitudes';
import Modales from '../modales/modales';

export default function FormularioPeticion ({user}) {
  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false)
  const dataImage = new FileReader()
  dataImage.onload = (e) => e.target.result

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
		defaultValues: {...user}
	})

  const enviar = (values) => {
		const {type_request_id, type,document_id, place_dispatch, address, staff_neighborhood, contact_phone, subject, problem, solution, neighborhood, location, url} = values

    // const image = dataImage.onload(url[0])
    
    const request = {
      type_request_id: type_request_id,
      type,
      document_id,
      place_dispatch,
      address,
      contact_phone,
      location,
      neighborhood,
      subject,
      problem,
      solution,
      url: null,
      staff_neighborhood
    }
    Swal.fire({
      title: 'Estas seguro de que los datos estan correctos',
      text: "Selecciona confirmar para continuar o cancelar para cambiar los datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        enviarPeticion(request, user.id)
          .then(userUpdate => {
            const user = userUpdate[0]
            console.log({user})
            setLoading(false)
            if(user.id) {
              const oldUser = JSON.parse(localStorage.getItem('usuarioLogeado'))
              const newJson = {...oldUser, data:{user}}
              console.log({newJson})
              localStorage.setItem('usuarioLogeado', JSON.stringify(newJson))
              Swal.fire({titleText: 'Informacion enviada correctamente', icon: 'success'})
            }})
      }
    })

    
	}
  /* estrellas */
  const  stars = Array(5).fill(0)
  const [estrellaActual, setestrellaActual] = useState(0);
  const [hoverActual, sethoverActual] = useState(undefined);

  /* tres funciones que cambian el evento y se actualiza el estado */
  /* en esta se va a manejar elo evento click */ 
  const click = value =>{
    setestrellaActual(value)
   };
/* establecer el valor del desplazamiento */
   const hover = value => {
    sethoverActual(value)
   };
/* anular opcion */
   const anularDefinicion = () => {
    sethoverActual(undefined)
   }
   const colors = {
    amarillo :'#ffff00',
    blanco:'#fff'
   }

  /* contenedor form */
  return (
    <form action="" className={style.contenedorform} onSubmit={handleSubmit(enviar)}>
      {loading && <Loading />}
      <p className={style.contenedortext}>
          Registro de solicitud - Recuerda que los campos con * son obligatorios
      </p>
      {/* select para elegir el tipo de solicitud */}
      <div className={style.contenedorSolicitud}>
          <label className={style.solilabel}>Tipo de solicitud:</label>
          <select {...register('type_request_id', {
            required: true
          })} id="" className={style.contenedorselect}>
              <option value="">
                  Tipo de solicitud
              </option>
              <TiposSolicitudes />
          </select>
          {errors.type_request_id && <p className={style.palabraError}>El tipo de solicitud es requerido</p>}
      </div>
      {/* inicio de datos personales */}
      <div className={style.contenedorprinDatos}>
              <div className={style.contenedoricotex}>
                  <IoDocumentTextOutline className={style.icontext} />
                  <p>Datos personales:</p>
              </div>
          <div className={style.contenedorDatos}>

              <div className={style.info}>
                  <p>* Tipo de documento:</p>
                  <select {...register('type', {
                    required: true,
                  })} id="" disabled={Boolean(user.type)}>
                      <option value="">
                          tipo de documento
                      </option>
                      <option value="cc" selected>
                          Cedula de ciudadania
                      </option>
                      <option value="ti" selected>
                          Tarjeta identidad
                      </option>
                      <option value="pp" selected>
                          Pasaporte
                      </option>
                      <option value="ce" selected>
                          Cedula de extranjeria
                      </option>
                  </select>
                  {errors.type && <p className={style.palabraError}>El tipo de documento es requerido</p>}
              </div>

              <div className={style.infolabel}>
                  <label htmlFor="documento">* Número de documento:</label>
                  <input type="text" placeholder="91287459" id='documento' disabled={user.number_document} {...register('document_id', {
                    required: true,
                    pattern: /^[0-9]{7,11}$/,
                    minLength: 7,
                    maxLength: 11
                  })} />
                  {errors.number_document?.type === 'required' && <p className={style.palabraError}>El numero de documento es requerido</p>}
                  {errors.number_document?.type === 'pattern' && <p className={style.palabraError}>Solo puede ingresar numeros</p>}
                  {errors.number_document?.type === 'minLength' && <p className={style.palabraError}>El numero de documento debe tener al menos 7 numeros</p>}
                  {errors.number_document?.type === 'maxLength' && <p className={style.palabraError}>El numero de documento no puede tener mas de 11 numeros</p>}
              </div>
              {!user.number_document
              && <div className={style.infolabel}>
                    <label htmlFor="cofirmacionDocumento">
                        * Confirmación de documento:
                    </label>
                    <input type="text" placeholder="91287459" id='cofirmacionDocumento' {...register('retry_document', {
                      required: true,
                      validate: (value) => {
                        if (watch('document_id') !== value) return 'El documento no esta correcto'
                      }
                    })} />
                    {errors.retry_document?.type === 'required' && <p className={style.palabraError}>El numero de confirmacion del documento es requerido</p>}
                    {errors.retry_document?.type === 'validate' && <p className={style.palabraError}>{errors.retry_document.message}</p>}
                </div>
              }

              <div className={style.infolabel}>
                  <label htmlFor="expedicion">
                    * Lugar de expedición:
                  </label>
                  <input type="text" placeholder="Bucaramanga"  id='expedicion' disabled={user.place_dispatch} {...register('place_dispatch', {
                    required: true,
                    pattern: /^[a-zA-Z]*$/,
                  })}
                  />
                  {errors.place_dispatch?.type === 'required' && <p className={style.palabraError}>El lugar de expedición es requerido</p>}
                  {errors.place_dispatch?.type === 'pattern' && <p className={style.palabraError}>Solo puede ingresar letras</p>}
              </div>

              <div className={style.infolabel}>
                  <label htmlFor="nombre">
                      Nombres:
                  </label>
                  <input type="text" disabled {...register('name')}/>
              </div>

              <div className={style.infolabel}>
                  <label htmlFor="last_name">
                      Apellidos:
                  </label>
                  <input type="text" disabled {...register('last_name')}/>
              </div>

              <div className={style.infolabel}>
                  <label htmlFor="direccion">
                    * Dirección
                  </label>
                  <input type="text" placeholder=" cll 01 #02-03" id='direccion' disabled={user.address} {...register('address', {
                    required: true,
                    minLength: 7
                  })}
                  />
                  {errors.address?.type === 'required' && <p className={style.palabraError}>La dirección es requerida</p>}
                  {errors.address?.type === 'minLength' && <p className={style.palabraError}>Debe ingresar al menos 7 caracteres</p>}
              </div>

              <div className={style.infolabel}>
                  <label htmlFor="barrioper">
                    * Barrio
                  </label>
                  <input type="text" placeholder="García Rovira" disabled={user.staff_neighborhood} id='barrioper'
                  {...register('staff_neighborhood', {
                    required: true,
                    minLength: 4
                  })}
                  />
                  {errors.staff_neighborhood?.type === 'required' && <p className={style.palabraError}>El barrio es requerido</p>}
                  {errors.staff_neighborhood?.type === 'minLength' && <p className={style.palabraError}>Debe ingresar al menos 4 caracteres</p>}
              </div>
              <div className={style.infolabel}>
                  <label htmlFor="telefono">
                    * Telefono:
                  </label>
                  <input type="text" placeholder="3157845257" disabled={user.contact_phone} id='telefono'
                  {...register('contact_phone', {
                    required: true,
                    pattern: /^[0-9]{7,10}$/,
                    minLength: 7,
                    maxLength: 10
                    
                  })}
                  />
                  {errors.contact_phone?.type === 'required' && <p className={style.palabraError}>El número de telefono es requerido</p>}
                  {errors.contact_phone?.type === 'pattern' && <p className={style.palabraError}>Solo puede ingresar numeros</p>}
                  {errors.contact_phone?.type === 'minLength' && <p className={style.palabraError}>El numero de telefono debe tener al menos 7 numeros</p>}
                  {errors.contact_phone?.type === 'maxLength' && <p className={style.palabraError}>El numero de telefono no puede tener mas de 10 numeros</p>}
              </div>
          </div>
      </div>
      {/* siguiente información para llenar la petición */}
      <div>
          <div className={style.complinf}>
              <label htmlFor="asunto">
                * Asunto del problema:
              </label>
              <input type="text" placeholder="Daño en el alcantarillado" id='asunto' 
              {...register('subject', {
                required: true
              })}
              />
              {errors.subject?.type === 'required' && <p className={style.palabraError}>El asunto del problema es requerido</p>}	
          </div>
          <div className={style.complinf}>
              <label htmlFor="descripcion">
              * Descripción del problema:
              </label>
              <input type="text" placeholder="Debido a esto se han ocacionado muchos accidentes en la via, por el robo de una tapa de la alcantandarilla" id='descripcion' 
              {...register('problem', {
                required: true
              })}
              />
              {errors.problem?.type === 'required' && <p className={style.palabraError}>La descripción del problema es requerida</p>}
          </div>
          <div className={style.textdes}>
              <label htmlFor="desSolicitud">
                * Descripción de la solicitud:
              </label>
              <textarea type="text" rows={15} placeholder="Quisiera reportar este  incidente ante las entidades gubernamentales para que hagan acción..." id='desSolicitud'
              {...register('solution', {
                required: true
              })}
              />
              {errors.solution?.type === 'required' && <p className={style.palabraError}>La descripción de la solicitud es requerida</p>}
          </div>
      </div>
      {/* datos de localizacion sobre el problema */}
          <h3 className={style.textlocal}>Localización del problema:</h3>
      <div className={style.inflocal}>
          <div className={style.infbar}>
              <label htmlFor="barrio">
              * Barrio:
              </label>
              <input type="text" placeholder="García Rovira" id='barrio' 
              {...register('neighborhood', {
                required: true,
                minLength: 4
              })}
              />
              {errors.neighborhood?.type === 'required' && <p className={style.palabraError}>El barrio es requerido</p>}
              {errors.neighborhood?.type === 'minLength' && <p className={style.palabraError}>Debe ingresar al menos 4 caracteres</p>}
          </div>
          <div className={style.infodesp}>
              <label htmlFor="descripcion">* Descripción de la localización:</label>
              <textarea  id="descripcion" cols="45" rows="8" placeholder="Este incidente se encuentra en la carrera 13 #31-34..." {...register('location', {
                required: true
              })}></textarea>
              {errors.location?.type === 'required' && <p className={style.palabraError}>La descripción de la localización es requerida</p>}
          </div>
      </div>
      {/* adjuntar la imagen de la petición */}
      <div className={style.infoimg}>
          <h3>Archivos adjuntos:</h3>
          <p>Señor/a usuario debe adjuntar solo fotos con un peso máximo de 5mb</p>
          <input type="file"  id="file" accept='image/*' className={style.inputfile}
          {...register('url', {
            required: true
          })}	
          />
          <label htmlFor='file'>
          <CiInboxOut size={25}/>
          <span className={style.iborrainputfile}>{(watch("url") && watch("url")[0]) ? watch("url")[0].name:"Seleccionar archivo"}</span>
          </label>
          {errors.url?.type === 'required' && <p className={style.palabraError}>La imagen es requerido</p>}
      </div>
      {/* texto importante para erl usuario */}
      <div className={style.textusu}>
          <p>
              Respuesta: Es importante revisar periódicamente el correo electrónico que registraste en la página, durante un plazo aproximado de 15 días hábiles, ya que es la forma más probable de respuesta a tu peticón. Sin embargo, también podrías recibir alguna respuesta por correspondencia física o solicitar  más información por teléfono.
          </p>
      </div>
      {/* firma del usuario */}
      <div className={style.infofirma}>

      </div>
      {/* termino de datos */}
      <div className={style.infoterminos}>
          <div className={style.terminosDatos}>
              <h3>Tratamiento de datos:</h3>
              <div className={style.datostext}>
                  <input type="checkbox" id="" 
                  {...register('accept_data_treatment', {
                    required: true
                  })}	
              />
                  <label>He leído y acepto las <span>políticas de Privacidad y tratamiento de Datos Personales.</span></label>
              </div>
              {errors.accept_data_treatment?.type === 'required' && <p className={style.palabraError}>Las politicas de privacidad son requeridas</p>}														
          </div>
          <div>
              <h3>Terminos y condiciones:</h3>
              <div className={style.datostext}>
                  <input type="checkbox" id="" 
                  {...register('accept_conditions_terms', {
                    required: true
                  })}	
              />
              <label>He leído y acepto los <span>términos y condiciones de esta petición.</span></label>
              </div>
              {errors.accept_conditions_terms?.type === 'required' && <p className={style.palabraError}>Los terminos y condiciones son requeridos</p>}	
          </div>
      </div>
      {/* botenes */}
      <div className={style.botones}>
          <button className={style.boton1} type='submit'>Enviar<IoIosPaperPlane/></button>
          <button className={style.boton2}>Cancelar<IoCloseSharp/></button>
      </div>
      <Modales title="Mi titulo" isOpen={open} setIsOpen={setOpen}>
        <p className={style.ModaltextP}>
          Por favor califica nuestra página de acuerdo a tu experiencia como usuario
        </p>
        {/* estrellas de calificación */}
        <div className={style.ModalEstrellas}>
  
          { stars.map((_, index)=> {
            return(
              <AiFillStar
              key={index + 20}
              size={35}
              style={
                {
                  cursor: 'pointer'
                }
              }
               color={(hoverActual >= index) || estrellaActual > index ? colors.amarillo: colors.blanco}
               onClick={()=> click(index + 1)}
               onMouseEnter={() => hover(index)}
               onMouseLeave={() => anularDefinicion()}
              />
            )
            
          })}

          
        </div>
        <div className={style.ModalComment}>
          <textarea name="" id="" cols="20" rows="5" placeholder='Danos mas detalle de tu experiencia'></textarea>
        </div>
        {/* botones */}
        <div className={style.botones}>
          <button className={style.boton1} type='submit'>Enviar</button>
          <button className={style.boton2}>Cancelar</button>
      </div>
      </Modales>
  </form>
  )
}
import axios from 'axios'
import clientHTTP from '../config/configAxios'

export async function EnvioLoginBd(envio) {
       let respuesta = await axios.post("http://localhost:4000/signIn",envio        )
                .then(res => res)
                .catch(err => err) 
        return respuesta
}

export async function EnvioResgistrarBd(envio) {

    return await axios.post("http://localhost:4000/signUp",envio)
  

}

<<<<<<< HEAD
// esto envia el un enlace al email para recuperar contrasena
=======
export async function enviarPeticion(cuerpo, id) {
    return await axios.post(`https://midenuncia-database-production.up.railway.app/request/${id}`, cuerpo,{
        headers: {
          "Content-Type": "multipart/form-data"
        }})
        .then(res => res.data.data) 
        .catch(err => console.log(err)) 
}

// export async function enviarPeticion(cuerpo, id) {
//     return await fetch(`https://midenuncia-database-production.up.railway.app/request/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(cuerpo)
//     }).catch(err => console.log(err))
// }

export async function traeTodoTipoSolicitudes() {
    return await axios.get(`https://midenuncia-database-production.up.railway.app/typerequest`)
        .catch(err => console.log(err))
}

export async function enviarEstrellas(data) {
    return await axios.post(`https://midenuncia-database-production.up.railway.app/rating/1`, data)
        .catch(err => console.log(err))
}

>>>>>>> desarrollo
export async function  EnvioEmailResetpassword (envio){

    return await axios.post("http://localhost:4000/forgot-password",envio)
     
 
 }
 
 
 // esta funcion resetea la contrasena del usuario con el enlace enviado al correo
 
 export async function  nuevaContrasena (envio){
 
     return await axios.put("http://localhost:4000/newPassword",envio)
      
  
  }
 

<<<<<<< HEAD






// esta funcion es para cambiar la contrasena del usuario logueado 
export async function  EnvioContrasenaNueva (envio){

    return await axios.put("http://localhost:4000/recoverPassword/4",envio)
     
 
 }

 
=======
} 
>>>>>>> desarrollo

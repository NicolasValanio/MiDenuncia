import axios from 'axios'

export async function EnvioLoginBd(envio) {
       let respuesta = await axios.post("http://localhost:4000/signIn",envio        )
                .then(res => res)
                .catch(err => err) 
        return respuesta
}

export function EnvioResgistrarBd(envio) {

    axios.post("http://localhost:4000/signUp",envio)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}



// esto envia el un enlace al email para recuperar contrasena
export async function  EnvioEmailResetpassword (envio){

   return await axios.post("http://localhost:4000/forgot-password",envio)
    

}


// esta funcion resetea la contrasena del usuario con el enlace enviado al correo

export async function  nuevaContrasena (envio){

    return await axios.put("http://localhost:4000/newPassword",envio)
     
 
 }



// esta funcion es para cambiar la contrasena del usuario logueado 
export async function  EnvioContrasenaNueva (envio){

    return await axios.put("http://localhost:4000/recoverPassword/4",envio)
     
 
 }

 

import axios from 'axios'

export async function EnvioLoginBd(envio) {
       let respuesta = await axios.post("https://midenuncia-database-production.up.railway.app/signIn",envio        )
                .then(res => res)
                .catch(err => err) 
        return respuesta
}

export function EnvioResgistrarBd(envio) {

    axios.post("https://midenuncia-database-production.up.railway.app/signUp",envio)
    .then(res => console.log(res))
    .catch(err => console.log(err))

}


export async function  EnvioEmailResetpassword (envio){

   return await axios.post("http://localhost:4000/forgot-password",envio)
    

}


export async function  EnvioContrasenaNueva (envio){

    return await axios.put("http://localhost:4000/recoverPassword/4",envio)
     
 
 }
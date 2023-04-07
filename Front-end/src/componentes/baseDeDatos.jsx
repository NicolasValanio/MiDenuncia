import axios from 'axios'
import clientHTTP from '../config/configAxios'

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
/* se creo una carpeta config en el cual contiene la url base,para que modifiquen cada peticion de la siguente forma */ 
/*
export async function traerUsuario(id) {
    return await clientHTTP.get(`/getUser/${id}`)
    .catch(err => console.log(err))
} */

export async function traerUsuario(id) {
    return await axios.get('/src/componentes/peticionesUsuarios/traerUsuario.json')
    .catch(err => console.log(err))
}

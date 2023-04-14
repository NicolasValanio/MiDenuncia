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

export async function enviarPeticion(cuerpo, id) {
    return await axios.put(`https://midenuncia-database-production.up.railway.app/request/${id}`, cuerpo)
        .then(res => res.data.data.filter(user => user.id === id))  
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
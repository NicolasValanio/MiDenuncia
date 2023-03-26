import axios from 'axios'

export function EnvioLoginBd(params) {
        axios.post("https://midenuncia-database-production.up.railway.app/signIn",params)
                .then(res => res)
                .catch(err => err) 
}

export function EnvioResgistrarBd(envio) {

    axios.post("https://midenuncia-database-production.up.railway.app/signUp",envio)
    .then(res => res)
    .catch(err => err)

}
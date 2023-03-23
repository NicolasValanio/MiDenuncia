import axios from 'axios'

export async function registroBd(envio) {

    const peticion = await axios.post("http://192.168.20.64:4000/signUp",envio).then(res => res).catch(err => console.error(err))

}

export async function loginBd(envio) {

    const peticion = axios.post("http://192.168.20.64:4000/signIn",envio).then(res => console.log(res)).catch(err => console.error(err))

}

export function peticiontarjeta(envio){
    const peticion = axios.get
}


import axios from 'axios'

export async function llamarBd(params) {
    return (
            await axios.post("https://midenuncia-database-production.up.railway.app/signIn",params)
                .then(res => res)
                .catch(err => err) 
            ) 
    }
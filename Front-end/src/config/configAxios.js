import axios from 'axios'

const baseURL = 'https://midenuncia-database-production.up.railway.app/signIn'

const clientHTTP = axios.create({ baseURL })

export default clientHTTP
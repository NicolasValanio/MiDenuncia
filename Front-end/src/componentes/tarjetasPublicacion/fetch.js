import axios from "axios";

export const userget= async () => {
const url='https://midenuncia-database-production.up.railway.app/infoRequestUser?limit=10&offset=1'
  let respuesta = await axios.get(url)
                    .then(res=> res)
                    .catch(err=> err);
    return respuesta
}





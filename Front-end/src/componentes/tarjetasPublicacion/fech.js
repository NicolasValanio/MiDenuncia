import axios from "axios";

export const userget= ()=>{
const url='https://midenuncia-database-production.up.railway.app/infoRequestUser'
let a = axios.get(url).then(res=> res ).catch(err=> console.error(err));
return a
}


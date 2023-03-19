import React from "react";
import axios from 'axios'

async function BaseDeDatos(envio) {

    const peticion = await axios.post("http://192.168.20.64:4000/createUser",envio).then(res => res).catch(err => console.error(err))

}

export default BaseDeDatos
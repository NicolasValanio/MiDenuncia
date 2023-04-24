import { useEffect, useState } from "react";
import { traeTodoTipoSolicitudes } from "../baseDeDatos";

export default function TiposSolicitudes () {
  const [tipoSolicitudes, setTipoSolicitudes] = useState(null)
  useEffect(()=> {
    traeTodoTipoSolicitudes()
      .then(respondeAxios => {
        setTipoSolicitudes(respondeAxios.data.types)
      })
  }, [])

  return (
    tipoSolicitudes 
    && tipoSolicitudes.map(tipo => (
      <option value={tipo.id} key={tipo.id}>
        {tipo.name}
      </option>
    ))
  )
}
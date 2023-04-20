import style from './peticionesUsuarios.module.css'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import FormularioPeticion from './FormularioPeticion'

function PeticionesUsuarios () {
	const [loading, setLoading] = useState(true) // eso es un hook
	const [user, setUser] = useState(null) // eso un hook

	useEffect(() => {
		const data = localStorage.getItem('usuarioLogeado')
		const userLocal = JSON.parse(data).data
        setUser(userLocal)
        setLoading(false)
	}, [])
	
    if (loading) return <Loading />

  return (
		<section className={style.contenedorPrincipal}>
            {/* contenedor nav */}
            <div className={style.contenedor}>
                <div className={style.logo} />
                <IoPersonCircleOutline className={style.icono} />
            </div>
            {/* contenedor de bienvenido */}
            <div className={style.contenedortext}>
                <h3 className={style.tituloh3}>Bienvenido</h3>
                <p className={style.titulop}>
                    Apreciado cuidadano, si usted desea realizar una petición, este es el
                    espacio para hacerlo.
                </p>
            </div>
            <FormularioPeticion user={user} />
        </section>
  )
}

export default PeticionesUsuarios

import style from '../misPeticiones/misPeticiones.module.css'
import TarjetasPublicacion from '../tarjetasPublicacion/tarjetasPublicacion'
import InfiniteScroll from 'react-infinite-scroll-component';

import { IoMdNotifications } from "react-icons/io";
import { GoMegaphone } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";


function MisPeticiones() {

    function tarjetasMisPeticiones() {
        return(
            <div className={`contenedor ${style.tarjetas}`}>
                <div className={`contenedor ${style.contBotones}`}>
                    <button className={`btn ${style.boton}`}>Eliminar</button>
                    <button className={`btn ${style.boton}`}>Solucionado</button>
                </div>
                {/* <TarjetasPublicacion /> */}
            </div>
        )
    }

    return(
        <div className={`contenedor ${style.misPeticiones}`}>
            <div className={`contenedor ${style.navbar}`}>
                <div className={`contenedor ${style.contlogo}`}>
                    <img src="https://res.cloudinary.com/dwrupo75d/image/upload/v1681503206/logo_t6vkfb.png" alt="logo" className={style.logo} />
                </div>
                <div className={`contenedor ${style.contIcons}`}>
                    <ul className={`contenedor ${style.icons}`}>
                        <li className={style.li}> <IoMdNotifications className={style.icon} /> </li>
                        <li className={style.li}> <GoMegaphone className={style.icon}/> </li>
                        <li className={style.li}> <FaUserCircle className={style.icon}/> </li>
                    </ul>
                </div>
            </div>
            <div className={`contenedor ${style.contTarjetas}`}> 
                {/* <InfiniteScroll
                dataLength={publicaciones === undefined ? 5 : publicaciones.length} 
                next={()=> {nuevoLlamado(paginaPublicaciones)}} 
                hasMore={true}
                >

                </InfiniteScroll> */}

                {tarjetasMisPeticiones()}
            </div>
        </div>
    )
}

export default MisPeticiones;
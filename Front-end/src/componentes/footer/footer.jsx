import React from "react";
import Style from "./footer.module.css";
import {ImFacebook2} from "react-icons/im"
import {IoLogoTwitter} from "react-icons/io"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {MdPermPhoneMsg} from "react-icons/md"
import {MdLocationPin} from "react-icons/md"


function Footer(){
    return(
         
    <div className={`contenedor ${Style.contenedorPrincipal}`}>

                <div className={`contenedor ${Style.primerContenedor}`}>
                    <img src="https://res.cloudinary.com/dwrupo75d/image/upload/v1681503206/logo_t6vkfb.png" alt="logo" className={Style.logo} />

                    <div className={Style.redessociales}>
                        <p>Redes Sociales:</p>
                        <ImFacebook2 className={Style.icon}/>
                        <IoLogoTwitter className={Style.icon}/>
                        <BsInstagram className={Style.icon}/>
                        <div className="coex"></div>
                    </div>

                </div>

                <div className={`contenedor ${Style.segundoContenedor}`}>
                    
                    <p>Contacto</p>

                    <div className={Style.mails}>
                        <AiOutlineMail className={Style.Sicon}/>
                        <a href="mailto:">notificaciones@bucaramanga.gov.co</a>
                    </div>

                    <div className={Style.mails}>
                        <AiOutlineMail className={Style.Sicon}/>
                        <a href="mailto:">contactenos@bucaramanga.gov.co</a>
                    </div>

                    <div className={Style.tels}>
                        <MdPermPhoneMsg className={Style.Sicon}/>
                        <p> +57 (607) 633 70 00</p>
                    </div>

                </div>

                <div className={`contenedor ${Style.tercercontenedor}`}>
                    <p className={Style.coex}>Datos Coex</p>
                   <div className={Style.ubication}> 
                        <MdLocationPin className={Style.Sicon}/>
                        <a href="https://goo.gl/maps/fhJaE7Ra2MBZ7AEp6" target="_blank">Calle 35 # 32-85</a>
                     
                   </div>

                    <div className={Style.mails}>
                        <AiOutlineMail className={Style.Sicon}/>
                        <a href="mailto:">comunicaciones@coex.com.co</a>
                    </div>
                    
                    <div className={Style.tels}>
                        <MdPermPhoneMsg className={Style.Sicon}/>
                        <p> +57 300 744 8411</p>
                    </div>

                </div>


            </div>
       
    )
}

export default Footer;

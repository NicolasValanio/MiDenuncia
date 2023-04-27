import React from "react";
import Footer from "../footer/footer";
import style from './habeasData.module.css'

function HabeasData(params) {
    return (

        <div className={style.contenedor}>
        <div className={style.contenedorInfo}>
        <div className={style.texto}>

        <p className={style.titulo}>AUTORIZACIÓN DE TRATAMIENTO DE DATOS PERSONALES</p> <br/>

        <p>Política de Habeas Data</p> <br/>

        <p className={style.parrafo}>En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, COEX informa a todos sus usuarios y visitantes acerca de las políticas de privacidad y protección de datos personales. </p><br/>

        <p className={style.insisos}>
            
        <span className={style.subtitulos}>1. Responsable del Tratamiento:</span>  COEX con NIT (número de identificación tributaria), es el responsable del tratamiento de los datos personales recopilados a través de COEX. <br/>
        <span className={style.subtitulos}>2. Finalidades del Tratamiento:</span>  La información personal que se recopila tiene como finalidad principal la prestación de los servicios ofrecidos por COEX. Asimismo, también se utiliza para enviar información sobre los productos y servicios de COEX y para fines estadísticos y de análisis.<br/>
        <span className={style.subtitulos}>3 .Derechos de los Titulares:</span>  Los titulares de los datos tienen derecho a conocer, actualizar y rectificar sus datos personales, a solicitar su eliminación o a oponerse a su tratamiento para fines específicos. Para ejercer estos derechos, el titular de los datos debe enviar una solicitud por escrito al correo electrónico MiDenuncia@empresas.com.<br/>
        <span className={style.subtitulos}>4 .Deberes de COEX:</span>  COEX se compromete a mantener la confidencialidad y seguridad de los datos personales recopilados, así como a cumplir con todos los requisitos legales y reglamentarios aplicables en materia de protección de datos.<br/>
        <span className={style.subtitulos}>5. Autorización para el Tratamiento de Datos Personales:</span> Al hacer clic en el botón "Aceptar", usted autoriza a COEX a recopilar, almacenar, utilizar y procesar sus datos personales de acuerdo con lo establecido en esta política de Habeas Data.<br/>
        <span className={style.subtitulos}>6 .Contacto:</span>  Para cualquier consulta relacionada con el tratamiento de datos personales, puede comunicarse con COEX a través del correo electrónico MiDenuncia@empresas.com. </p> 
        </div>

        <a href="../peticionesUsuarios" className={style.aBoton}>
        <div className={style.boton}>
        <p className={style.textoBoton}>Volver</p> </div>
        </a>

        </div>
        < Footer />
        </div>
        
        )
}

export default HabeasData;
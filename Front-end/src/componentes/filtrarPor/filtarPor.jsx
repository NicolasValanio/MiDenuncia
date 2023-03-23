import React from "react";
import  Style from './filtarPor.module.css'
import { AiFillAlert } from "react-icons/ai";
import { TbRoad } from "react-icons/tb";
import { BsFillSignStopFill } from "react-icons/bs";
import { BsFillTreeFill } from "react-icons/bs";
import { GiDoubleStreetLights  } from "react-icons/gi";
import { TbRecycleOff } from "react-icons/tb";

function FiltarPor (){
    return(
        <div >
            <div className={Style.filtrar}>
                <h1 >Filtrar Por: </h1>
              <ul>
                <li><AiFillAlert className={Style.icon}/> Seguridad</li>
                <li><TbRoad className={Style.icon}/> Malla Vial</li>
                <li><BsFillSignStopFill className={Style.icon}/> Señalizacion Vial </li>
                <li><BsFillTreeFill className={Style.icon}/>Espacios Publicos</li>
                <li><GiDoubleStreetLights className={Style.icon}/>Alumbrado Publico</li>
                <li>  <TbRecycleOff className={Style.icon}/>Contaminacion  Ambiental</li>
              </ul>
                
            </div>
        </div>
    )

}

export default FiltarPor


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
                <li className={Style.Cseguridad}><AiFillAlert className={`icon ${Style.seguridad}`}/>Seguridad</li>
                <li className={Style.Mvial}><TbRoad className={`icon ${Style.Malla}`}/> Malla Vial </li>
                <li className={Style.Svial}><BsFillSignStopFill className={`icon ${Style.Senalizacion}`}/> Señalizacion Vial</li>
                <li className={Style.Epublicos}><BsFillTreeFill className={`icon ${Style.Espacios}`}/>Espacios Publicos </li>
                <li className={Style.Apublicos}> <GiDoubleStreetLights className={`icon ${Style.Alumbrado}`}/>Alumbrado Publico</li>
                <li className={Style.Cambiental}><TbRecycleOff className={`icon ${Style.Ambiental}`}/>Contaminacion  Ambiental</li>
              </ul>
                
            </div>
        </div>
    )

}

export default FiltarPor


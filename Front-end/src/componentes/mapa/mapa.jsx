import React from "react";
import Style from "./mapa.module.css";
import {GoogleMap} from "@react-google-maps/api"

var latitud= 37.7749
var lonitud= -122.4194
const Mapa=()=>{
    
    const mapStyles = {
        height: '400px',
        width: '50%'
    };
    
    const defaultCenter = {
        lat: latitud,
        lng: lonitud
    };
    
    return(
        <div>
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBA3h4EK-Yhre3R40tViWu9gQFQ-O98Jg4&callback=initMap"></script>
            <GoogleMap 
            mapContainerStyle={mapStyles}
            center={defaultCenter}
            zoom={6}
            />
        </div>
    );
    
};
console.log(<GoogleMap/>)


export default Mapa;
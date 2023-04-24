
import {  Navigate,Outlet } from "react-router-dom"

let usuario

export function llenardatos(userA) {
    usuario = userA
    window.localStorage.setItem (
        'usuarioLogeado' , JSON.stringify(usuario)
    )
}

export const EntrarPagina =() => {
    let usuarioToken = window.localStorage.getItem('usuarioLogeado')
        if (usuarioToken) {
            const user = JSON.parse(usuarioToken) 
            return   < Navigate to='/UsuarioLog'  />
        }

    return  <Outlet />
}


export const UseProtegerRutas =() => {

    let usuarioToken = window.localStorage.getItem('usuarioLogeado')

    if (usuarioToken) {
        const user = JSON.parse(usuarioToken)  
    }else{
        console.log('no existe');
        return   < Navigate to='/login'  />
    }

    return  <Outlet />
}
export function Logout(){
    //Borra el localStorage
    
    localStorage.clear();
    console.log("Saliendo...");
    window.location.href="/"
}

// LOCALSTORAGE ---------------------------------------------------------------------


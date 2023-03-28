
import { useEffect } from "react"
import {  Navigate,Outlet } from "react-router-dom"

let usuario

export function llenardatos(userA) {
    usuario = userA
    window.localStorage.setItem (
        'usuarioLogeado' , JSON.stringify(usuario)
    )
}

export const UseProtegerRutas =() => {

    let usuarioToken

    useEffect(()=>{
        usuarioToken = window.localStorage.getItem('usuarioLogeado')
        if (usuarioToken) {
            const user = JSON.parse(usuarioToken)
            renderPaginas(user)    
        }
    },[])


    function renderPaginas(usuaioTokenValidaion) {
        if (!usuaioTokenValidaion) {
            return  < Navigate to='/login'  />
         }
    }
    
   
    return <Outlet />
}


// LOCALSTORAGE ---------------------------------------------------------------------


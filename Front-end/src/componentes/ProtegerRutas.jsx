
import { useState,useEffect } from "react"
import {  Navigate,Outlet } from "react-router-dom"

let ValidacionesUsuario 

export function llenardatos(userA) {
    ValidacionesUsuario = userA
}

export const UseProtegerRutas =() => {
    if (!ValidacionesUsuario) {
       return  < Navigate to='/login'  />
    }
    return <Outlet />
}


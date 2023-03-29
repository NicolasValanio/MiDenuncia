//IMPORTACIONES
import { Route,Routes} from 'react-router-dom'
import {UseProtegerRutas} from './ProtegerRutas'

import Login from './login/login'
import UsuarioNoLog from './usuarioNoLog/usuarioNoLog'
import HabeasData from './habeasData/habeasData'
import PeticionesUsuarios from './peticionesUsuarios/peticionesUsuarios'
import RegistroDenuncia from './registroDenuncia/registroDenuncia'
import RegistroUsuario from './registroUsuario/registroUsuario'
import UsuarioLog from './usuarioLog/usuarioLog'
import VistaDenunciaX from './vistaDenunciaX/vistaDenunciaX'
import VistaSuperAdmin from './vistaSuperAdmin/vistaSuperAdmin'
import VistaUsuario from './vistaUsuario/vistaUsuario'
import RecuperarContraseña from './recuperarContraseña/recuperarContraseña'



function Rutas() {


    return (
            <Routes>
                <Route exact path="/" element={<UsuarioNoLog />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                <Route element={<UseProtegerRutas />}>
                    <Route path="/HabeasData" element={<HabeasData />} />
                    <Route path="/recuperarContraseña" element={<RecuperarContraseña />} />
                    <Route path="/PeticionesUsuarios" element={<PeticionesUsuarios />} />
                    <Route path="/RegistroDenuncia" element={<RegistroDenuncia />} />
                    <Route path="/UsuarioLog" element={<UsuarioLog />} />
                    <Route path="/VistaDenunciaX" element={<VistaDenunciaX />} />
                    <Route path="/VistaUsuario" element={<VistaUsuario />} /> 
                </Route>
                <Route path="/VistaSuperAdmin" element={<VistaSuperAdmin />} />

                <Route path="*" element={<h1>PAGINA NO EXISTE</h1>} />

            </Routes>
    )
}
export default Rutas;
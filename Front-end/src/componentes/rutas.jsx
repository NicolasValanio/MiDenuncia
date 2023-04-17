//IMPORTACIONES
import { Route,Routes} from 'react-router-dom'
import {UseProtegerRutas,EntrarPagina} from './ProtegerRutas'



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
import Mapa from './mapa/mapa'



function Rutas() {


    return (
            <Routes>

                <Route element={EntrarPagina()}>
                    <Route exact path="/" element={<UsuarioNoLog />} /> 
                </Route>
                
                <Route path="/login" element={<Login />} />
                {/* <Route path="/resetPassword" element={<ResetPassword />} /> */}
                <Route path="/recuperarContrasena" element={<RecuperarContraseña />} />
                {/* <Route path="/contrasenaNueva" element={<ContrasenaNueva/>} /> */}
                {/* <Route path="/password" element={<Password />} /> */}

                <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                <Route element={<UseProtegerRutas />}>
                    <Route path="/HabeasData" element={<HabeasData />} />
                    <Route path="/PeticionesUsuarios" element={<PeticionesUsuarios />} />
                    <Route path="/RegistroDenuncia" element={<RegistroDenuncia />} />
                    <Route path="/UsuarioLog" element={<UsuarioLog />} />
                    <Route path="/VistaDenunciaX" element={<VistaDenunciaX />} />
                    <Route path="/VistaUsuario" element={<VistaUsuario />} /> 
                    <Route path="/Mapa" element={<Mapa />} />
                </Route>
                
                <Route path="/VistaSuperAdmin" element={<VistaSuperAdmin />} />

                <Route path="*" element={<h1>PAGINA NO EXISTE</h1>} />

            </Routes>
    )
}
export default Rutas;
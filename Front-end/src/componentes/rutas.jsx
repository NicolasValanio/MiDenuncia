//IMPORTACIONES
import { Route,Routes,Link } from 'react-router-dom'

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
import NavegacionNoLog  from './navegacionNoLog/navegacion';

function Rutas() {
    return (
        <div>

            <Routes>
                    
                <Route exact path="/" element={<UsuarioNoLog />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/HabeasData" element={<HabeasData />} />
                <Route path="/PeticionesUsuarios" element={<PeticionesUsuarios />} />
                <Route path="/RegistroDenuncia" element={<RegistroDenuncia />} />
                <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
                <Route path="/UsuarioLog" element={<UsuarioLog />} />
                <Route path='/UsuarioNoLog' element={<UsuarioNoLog />} />
                <Route path="/VistaDenunciaX" element={<VistaDenunciaX />} />
                <Route path="/VistaSuperAdmin" element={<VistaSuperAdmin />} />
                <Route path="/VistaUsuario" element={<VistaUsuario />} />
                <Route path="/NavegacionNoLog" element={<NavegacionNoLog />} />

                <Route path="*" element={<h1>PAGINA NO EXISTE</h1>} />

            </Routes>

        </div>
    )
}
export default Rutas;
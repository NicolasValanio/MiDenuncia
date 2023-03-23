import './index.css'
import { Route,Routes,Link } from 'react-router-dom'


import Login from './componentes/login/login'
import UsuarioNoLog from './componentes/usuarioNoLog/usuarioNoLog'
import HabeasData from './componentes/habeasData/habeasData'
import PeticionesUsuarios from './componentes/peticionesUsuarios/peticionesUsuarios'
import RegistroDenuncia from './componentes/registroDenuncia/registroDenuncia'
import RegistroUsuario from './componentes/registroUsuario/registroUsuario'
import UsuarioLog from './componentes/usuarioLog/usuarioLog'
import VistaDenunciaX from './componentes/vistaDenunciaX/vistaDenunciaX'
import VistaSuperAdmin from './componentes/vistaSuperAdmin/vistaSuperAdmin'
import VistaUsuario from './componentes/vistaUsuario/vistaUsuario'
import NavegacionNoLog  from './componentes/navegacionNoLog/navegacion';
import NavegacionUserLog from './componentes/navegacionUserLog/NavegacionUserLog'
// NADIE TOCA ESTO!!!!


 function App() {

  // const basededatos = async () => {
  //   const peticion = await axios.post("http://192.168.20.64:4000/createUser", )
  // }

  // basededatos()

  return (
    <div className="App">

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
        <Route path="/NavegacionUserLog" element={<NavegacionUserLog />} />

        <Route path="*" element={<h1>PAGINA NO EXISTE</h1>} />
      </Routes>

    </div>
  )
}

export default App

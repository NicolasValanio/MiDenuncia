import './App.css'
import { Route,Routes,Link } from 'react-router-dom'

import Login from './componentes/login'
import UsuarioNoLog from './componentes/usuarioNoLog'
import HabeasData from './componentes/habeasData'
import PeticionesUsuarios from './componentes/peticionesUsuarios'
import RegistroDenuncia from './componentes/registroDenuncia'
import RegistroUsuario from './componentes/registroUsuario'
import UsuarioLog from './componentes/usuarioLog'
import VistaDenunciaX from './componentes/vistaDenunciaX'
import VistaSuperAdmin from './componentes/vistaSuperAdmin'
import VistaUsuario from './componentes/vistaUsuario'


function App() {

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
        <Route path="/VistaDenunciaX" element={<VistaDenunciaX />} />
        <Route path="/VistaSuperAdmin" element={<VistaSuperAdmin />} />
        <Route path="/VistaUsuario" element={<VistaUsuario />} />

        <Route path="*" element={<h1>PAGINA NO EXISTE</h1>} />
      </Routes>

    </div>
  )
}

export default App
